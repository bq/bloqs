'use strict';
(function (exports, _, Q, bloqsUtils, bloqsLanguages, bloqsTooltip, bloqsSuggested, bloqsDotsMatrix) {
    /**
     * Events
     * bloqs:created
     * bloqs:connect
     * bloqs:dragend
     * bloqs:bloqremoved
     * bloqs:change
     */

    var utils = bloqsUtils,
        lang = 'es-ES',
        connectors = {},
        IOConnectors = {},
        bloqs = {},
        availableConnectors = [],
        availableIOConnectors = [],
        $field = null,
        scrollTop = 0,
        forcedScrollTop = null,
        softwareArrays = {
            voidFunctions: [],
            returnFunctions: [],
            softwareVars: [],
            classes: [],
            objects: []
        },
        dragPreviousTopPosition,
        dragPreviousLeftPosition,
        dragBloqMousePositionX,
        dragBloqMousePositionY,
        //we cant get the offset if the element its not visible, to avoid calc them on each drag, set them here
        fieldOffsetTop,
        //to relative fields
        fieldOffsetLeft = 0, //Bitbloq value 70,
        fieldOffsetRight = 0, //Bitbloq value 216 (toolbox and scroll)
        fieldOffsetTopSource = [], //bitbloq value['header', 'nav--make', 'actions--make', 'tabs--title'],
        fieldOffsetTopForced = 0,
        mouseDownBloq = null,
        draggingBloq = null,
        startPreMouseMove = null,
        availableBloqs,
        preMouseMoveX,
        preMouseMoveY,
        shiftKeyDown,
        suggestionOnStatements = true,
        bloqSchemas,
        mainBloqs = [],
        componentsArray = bloqsUtils.getEmptyComponentsArray();

    var setOptions = function (options) {
        fieldOffsetTopSource = options.fieldOffsetTopSource || fieldOffsetTopSource || [];
        fieldOffsetLeft = options.fieldOffsetLeft || fieldOffsetLeft || 0;
        fieldOffsetRight = options.fieldOffsetRight || fieldOffsetRight || 0;
        fieldOffsetTopForced = options.fieldOffsetTopForced || fieldOffsetTopForced || 0;
        availableBloqs = options.availableBloqs;
        suggestionOnStatements = options.suggestionOnStatements || true;

        if ((options.forcedScrollTop === 0) || options.forcedScrollTop) {
            forcedScrollTop = options.forcedScrollTop;
        }
        bloqSchemas = options.bloqSchemas;
        bloqsSuggested.init(options.suggestionWindowParent, options.bloqSchemas);
        bloqsDotsMatrix.init(options.dotsMatrixWindowParent);

        lang = options.lang || 'es-ES';
    };

    var getFieldOffsetTop = function (source) {
        var fieldOffsetTop = 0;
        if (fieldOffsetTopForced) {
            fieldOffsetTop = fieldOffsetTopForced;
        } else {
            var tempElement;
            for (var i = 0; i < source.length; i++) {
                tempElement = document.getElementsByClassName(source[i]);
                if (tempElement[0]) {
                    fieldOffsetTop += tempElement[0].clientHeight;
                }
            }
        }

        return fieldOffsetTop;
    };

    var bloqMouseDown = function (evt) {
        // console.log('bloqMouseDown');
        // console.log(evt);
        //console.log(evt.target.tagName);


        if (evt.target.tagName !== 'SELECT') {
            //to avoid mousemove event on children and parents at the same time
            evt.stopPropagation();
            //launch another event
            window.dispatchEvent(new CustomEvent('bloqs:mousedown', {
                detail: event.target
            }));

            mouseDownBloq = evt.currentTarget;
            startPreMouseMove = true;
            shiftKeyDown = evt.shiftKey;
            document.addEventListener('mousemove', bloqPreMouseMove);
            document.addEventListener('mouseup', bloqMouseUpBeforeMove);
            document.addEventListener('touchmove', bloqPreMouseMove);
            document.addEventListener('touchend', bloqMouseUpBeforeMove);
        }
    };

    var bloqMouseUpBeforeMove = function () {
        //console.log('bloqMouseUpBeforeMove');
        mouseDownBloq = null;
        document.removeEventListener('mousemove', bloqPreMouseMove);
        document.removeEventListener('mouseup', bloqMouseUpBeforeMove);
        document.removeEventListener('touchmove', bloqPreMouseMove);
        document.removeEventListener('touchend', bloqMouseUpBeforeMove);
    };

    //to avoid move bloqs with a 1 px movement
    var bloqPreMouseMove = function (evt) {
        // console.log('bloqPreMouseMove');
        // console.log(evt.type);
        var pageX = evt.pageX || evt.touches[0].pageX,
            pageY = evt.pageY || evt.touches[0].pageY;

        if (startPreMouseMove) {
            preMouseMoveX = pageX;
            preMouseMoveY = pageY;
            startPreMouseMove = false;

            //we take values to the bloqsMouseMove from the first move
            var position = mouseDownBloq.getBoundingClientRect();

            //mouse position respect bloq
            dragBloqMousePositionX = pageX - position.left;
            dragBloqMousePositionY = pageY - position.top;

            //the mouse position its relative to the document, we need the top offset from header
            fieldOffsetTop = getFieldOffsetTop(fieldOffsetTopSource);

            //position to control the translate and the distance
            dragPreviousTopPosition = position.top;
            dragPreviousLeftPosition = position.left;

            //to add the scroll to the mouse positions
            scrollTop = $field[0].scrollTop;
        } else {
            //console.log(pageX, pageY)
            var distanceX = pageX - preMouseMoveX,
                distanceY = pageY - preMouseMoveY;

            //console.log('distance', Math.abs(distanceX), Math.abs(distanceY));
            if ((Math.abs(distanceX) >= 5) || (Math.abs(distanceY) >= 5)) {
                document.removeEventListener('mousemove', bloqPreMouseMove);
                document.addEventListener('mousemove', bloqMouseMove);
                document.removeEventListener('touchmove', bloqPreMouseMove);
                document.addEventListener('touchmove', bloqMouseMove);
            }
        }
    };

    var bloqMouseMove = function (evt) {
        //console.log('bloqMouseMove');
        var bloq = null;
        //actions to do before start to move
        if (mouseDownBloq) {

            bloq = bloqs[mouseDownBloq.getAttribute('data-bloq-id')];
            window.dispatchEvent(new CustomEvent('bloqs:startMove', {
                detail: bloq
            }));

            if (!bloq.isConnectable()) {
                //console.log('its not connectable');
                bloq.doConnectable();
                $field.append(bloq.$bloq);
            }
            document.removeEventListener('mouseup', bloqMouseUpBeforeMove);
            document.addEventListener('mouseup', bloqMouseUp);
            document.removeEventListener('touchend', bloqMouseUpBeforeMove);
            document.addEventListener('touchend', bloqMouseUp);

            mouseDownBloq.className = mouseDownBloq.className.concat(' dragging');

            switch (bloq.bloqData.type) {
                case 'statement':
                case 'statement-input':
                    statementDragStart(bloq);
                    break;
                case 'output':
                    outputDragStart(bloq);
                    break;
                case 'group':
                    throw 'Group cant be moved';
                default:
                    throw 'Not defined bloq dragstart!!';
            }
            mouseDownBloq = null;
            draggingBloq = bloq;
        }

        bloq = bloq || draggingBloq;
        var clientX = evt.clientX || evt.touches[0].clientX,
            clientY = evt.clientY || evt.touches[0].clientY;

        var distance = moveBloq(bloq, clientX, clientY);

        switch (bloq.bloqData.type) {
            case 'statement':
            case 'statement-input':
                utils.redrawTree(bloq, bloqs, connectors);
                if (distance > 10) {
                    handleCollisions([bloq.connectors[0], utils.getLastBottomConnectorUuid(bloq.uuid, bloqs, connectors)], evt);
                }
                break;
            case 'output':
                if (distance > 10) {
                    handleIOCollisions(bloq, availableIOConnectors);
                }
                break;
            default:
                throw 'Not defined bloq drag!!';
        }
    };

    var bloqMouseUp = function (evt) {
        //console.log('bloqMouseUp');
        scrollTop = 0;
        var $dropConnector = $('.connector.available').first(),
            bloq = draggingBloq;

        connectBloq(bloq, $dropConnector);
        window.dispatchEvent(new CustomEvent('bloqs:dragend', {
            detail: {
                bloq: bloq,
                mouseEvent: evt
            }
        }));
        utils.removeAttributeFromSelector('data-canconnectwith', '[data-canconnectwith]');

    };

    var connectBloq = function (bloq, $dropConnector) {
        if ($dropConnector[0]) {

            switch (bloq.bloqData.type) {
                case 'statement':
                case 'statement-input':
                    statementDragEnd(bloq, $dropConnector);
                    break;
                case 'output':
                    connectOutputBloq(bloq, $dropConnector);
                    break;
                default:
                    throw 'Not defined bloq drag!!';
            }
            window.dispatchEvent(new Event('bloqs:connect'));

            if (!bloq.$bloq.closest('.bloq--group')[0] || (bloq.$bloq.closest('.inside-bloq.disabled')[0] && !_.isEqual(bloq.$bloq.closest('.inside-bloq.disabled')[0], bloq.$bloq[0]))) {
                bloq.disable();
                if ((bloq.bloqData.type === 'statement') || (bloq.bloqData.type === 'statement-input')) {
                    utils.executeFunctionOnConnectedStatementBloqs('disable', bloq, bloqs, connectors);
                }
            } else {
                bloq.enable();
                if ((bloq.bloqData.type === 'statement') || (bloq.bloqData.type === 'statement-input')) {
                    utils.executeFunctionOnConnectedStatementBloqs('enable', bloq, bloqs, connectors);
                }
                autoChildCreation(bloq);
            }
        } else {
            bloq.disable();
            if ((bloq.bloqData.type === 'statement') || (bloq.bloqData.type === 'statement-input')) {
                utils.executeFunctionOnConnectedStatementBloqs('disable', bloq, bloqs, connectors);
            }

        }
        availableConnectors = [];
        availableIOConnectors = [];
        $('.bloq').removeClass('dragging');
        $('.connector.available').removeClass('available');
        $('.connector.invalid').removeClass('invalid');
        $('.connector.valid').removeClass('valid');
        $('.bloq--dragging').removeClass('bloq--dragging');
        $field.focus();


        draggingBloq = null;
        dragPreviousTopPosition = 0;
        dragPreviousLeftPosition = 0;

        document.removeEventListener('mousemove', bloqMouseMove);
        document.removeEventListener('mouseup', bloqMouseUp);
        document.removeEventListener('touchmove', bloqMouseMove);
        document.removeEventListener('touchend', bloqMouseUp);

    };

    var autoChildCreation = function (connectedBloq) {
        if (connectedBloq.bloqData.autoChildCreation) {
            if (!connectors[connectedBloq.connectors[2]].connectedTo) {
                var newBloq;
                newBloq = new Bloq({
                    bloqData: bloqSchemas[connectedBloq.bloqData.autoChildCreation]
                });
                $field.append(newBloq);
                newBloq.doConnectable();

                connectBloq(newBloq, connectors[connectedBloq.connectors[2]].jqueryObject);
                window.dispatchEvent(new CustomEvent('bloqs:suggestedAdded', {
                    detail: newBloq
                }));
            }
        }
    };

    var statementDragStart = function (bloq) {

        var previousConnector = connectors[bloq.connectors[0]].connectedTo;
        var afterConnector;
        if (shiftKeyDown) {
            afterConnector = connectors[bloq.connectors[1]].connectedTo;
            if (afterConnector) {
                //test rompemos el enlace de abajo
                connectors[afterConnector].connectedTo = previousConnector;
                if (previousConnector) {
                    connectors[previousConnector].connectedTo = afterConnector;
                }
                connectors[bloq.connectors[1]].connectedTo = null;
                utils.redrawTree(bloqs[connectors[afterConnector].bloqUuid], bloqs, connectors);
            }
        }


        if (previousConnector) {
            var previousBloq = bloqs[connectors[previousConnector].bloqUuid];

            var itsInsideAConnectorRoot = utils.itsInsideAConnectorRoot(bloq, bloqs, connectors);

            //desenganchamos
            if (!afterConnector) {
                connectors[previousConnector].connectedTo = null;
            }

            connectors[bloq.connectors[0]].connectedTo = null;



            //miramos si estaba enganchado a un connector-root para sacarlo del parent
            if (itsInsideAConnectorRoot) {


                if (previousBloq.bloqData.type === 'group' && !afterConnector) {
                    //remove class that show help on group bloqs
                    previousBloq.$bloq.removeClass('with--content');
                }
                removeFromStatementInput(bloq);
                utils.redrawTree(previousBloq, bloqs, connectors);

            }
        }

        availableConnectors = [];

        var possibleConnectors;
        for (var possibleDropBloqUuid in bloqs) {
            var possibleDropBloq = bloqs[possibleDropBloqUuid];
            if (possibleDropBloq.bloqData.type !== 'output' && possibleDropBloq.isConnectable() && !utils.connectorIsInBranch(possibleDropBloq.connectors[0], bloq.uuid, bloqs, connectors)) {
                possibleConnectors = utils.canConnectStatementBloqs(bloq, possibleDropBloq, bloqs, connectors);
                if (possibleConnectors) {
                    availableConnectors = availableConnectors.concat(possibleConnectors);
                }
            }
        }

        for (var i = 0; i < availableConnectors.length; i++) {
            connectors[availableConnectors[i]].jqueryObject.addClass('valid');
        };
    };

    var removeFromStatementInput = function (firstBloqToRemove) {
        var $totalBloqsToRemove = [firstBloqToRemove.$bloq];
        var childConnectorUuid = connectors[firstBloqToRemove.connectors[1]].connectedTo,
            bloqToRemove,
            top = firstBloqToRemove.$bloq.outerHeight(true);

        firstBloqToRemove.$bloq.removeClass('inside-bloq');
        while (childConnectorUuid) {
            bloqToRemove = bloqs[connectors[childConnectorUuid].bloqUuid];
            $totalBloqsToRemove.push(bloqToRemove.$bloq);
            bloqToRemove.$bloq.removeClass('inside-bloq');
            bloqToRemove.$bloq[0].style.transform = 'translate(' + 0 + 'px,' + top + 'px)';
            top += bloqToRemove.$bloq.outerHeight(true);
            childConnectorUuid = connectors[bloqToRemove.connectors[1]].connectedTo;
        }
        utils.appendArrayInOneTime($field, $totalBloqsToRemove);

    };

    var outputDragStart = function (bloq) {
        var outputConnector = utils.getOutputConnector(bloq, IOConnectors);
        if (outputConnector.connectedTo) {
            bloq.$bloq.removeClass('nested-bloq');

            var bloqConnector = IOConnectors[outputConnector.connectedTo],
                oldBloq = bloqs[bloqConnector.bloqUuid];

            //remove the logical conexions
            bloqConnector.connectedTo = null;
            outputConnector.connectedTo = null;

            if (oldBloq.bloqData.returnType && (oldBloq.bloqData.returnType.type === 'fromInput')) {
                updateSoftVar(oldBloq);
            }

            $field[0].appendChild(bloq.$bloq[0]);
        }

        //store the available connectors
        availableIOConnectors = [];
        for (var connectorUuid in IOConnectors) {
            if (IOConnectors[connectorUuid].data.type === 'connector--input') {
                if (utils.getBloqByConnectorUuid(connectorUuid, bloqs, IOConnectors).isConnectable() && !IOConnectors[connectorUuid].connectedTo && utils.sameConnectionType(bloq, utils.getBloqByConnectorUuid(connectorUuid, bloqs, IOConnectors), IOConnectors[connectorUuid].data.acceptType, bloqs, IOConnectors, softwareArrays, componentsArray) && !utils.connectorIsInBranch(connectorUuid, bloq.uuid, bloqs, IOConnectors)) {
                    availableIOConnectors.push(connectorUuid);
                    IOConnectors[connectorUuid].jqueryObject.addClass('valid');
                } else {
                    IOConnectors[connectorUuid].jqueryObject.addClass('invalid');
                }
            }
        }

        // console.log('availableIOConnectors',availableIOConnectors);
    };

    var moveBloq = function (bloq, clientX, clientY) {
        var position = bloq.$bloq[0].getBoundingClientRect(),
            distance = Math.round(Math.sqrt(Math.pow(dragPreviousTopPosition - position.top, 2) + Math.pow(dragPreviousLeftPosition - position.left, 2))),
            x,
            y,
            destinationX,
            destinationY;
        if (scrollTop !== $field[0].scrollTop) {
            scrollTop = $field[0].scrollTop;
        }

        if (forcedScrollTop !== null) {
            scrollTop = forcedScrollTop;
        }

        x = clientX - fieldOffsetLeft;
        y = clientY - fieldOffsetTop + scrollTop;

        destinationX = (x - dragBloqMousePositionX);
        destinationY = (y - dragBloqMousePositionY);

        bloq.$bloq[0].style.transform = 'translate(' + destinationX + 'px,' + destinationY + 'px)';
        if (distance > 10) {
            dragPreviousTopPosition = position.top;
            dragPreviousLeftPosition = position.left;
        }
        if (bloq.bloqData.type === 'statement-input') {
            utils.redrawTree(bloq, bloqs, connectors);
        }

        return distance;
    };

    var statementDragEnd = function (bloq, $dropConnector) {

        var dropConnectorUuid = $dropConnector.attr('data-connector-id');
        var dragConnectorUuid = $('[data-connector-id="' + dropConnectorUuid + '"]').attr('data-canconnectwith') || bloq.connectors[0];

        //console.log('dragConnectorUuid', dragConnectorUuid);
        //console.log('dropUuid', dropConnectorUuid);
        var areDroppingInsideABloq = utils.itsARootConnector(connectors[dropConnectorUuid]) || utils.itsInsideAConnectorRoot(utils.getBloqByConnectorUuid(dropConnectorUuid, bloqs, connectors), bloqs, connectors);

        //console.log('areDroppingInsideABloq?', areDroppingInsideABloq);
        if (dropConnectorUuid !== dragConnectorUuid) {

            setLogicalConnections(dropConnectorUuid, dragConnectorUuid);
            if (areDroppingInsideABloq) {
                connectorRootDragEnd(bloq, $dropConnector);
            } else {
                placeNestedBloq(dropConnectorUuid, dragConnectorUuid);
            }
        } else {
            console.log('cant connect...');
        }

    };

    var connectorRootDragEnd = function (dragBloq, $dropConnector) {
        //console.log('connectorRootDragEnd');
        var dropConnectorUuid = $dropConnector.attr('data-connector-id');
        var dropBloq = bloqs[connectors[dropConnectorUuid].bloqUuid];

        dragBloq.$bloq.addClass('inside-bloq');
        dragBloq.$bloq.removeAttr('style');

        if (utils.itsARootConnector(connectors[dropConnectorUuid])) {
            var $dropContainer = dropBloq.$bloq.find('.bloq--extension__content');
            $dropContainer.first().append(dragBloq.$bloq);
            dropBloq.$bloq.addClass('with--content');
        } else {
            dropBloq.$bloq.after(dragBloq.$bloq);
        }

        //var childNodes

        var somethingConnectedInBottomUuid = connectors[dragBloq.connectors[1]].connectedTo;
        var branchBloq;
        var childNodes = [];
        while (somethingConnectedInBottomUuid) {
            branchBloq = bloqs[connectors[somethingConnectedInBottomUuid].bloqUuid];
            childNodes.push(branchBloq.$bloq);
            branchBloq.$bloq.addClass('inside-bloq');
            branchBloq.$bloq.removeAttr('style');

            somethingConnectedInBottomUuid = connectors[branchBloq.connectors[1]].connectedTo;

        }
        dragBloq.$bloq.after(utils.jqueryObjectsArrayToHtmlToInsert(childNodes));

        //se repinta el arbol donde esta el dropbloq, porq cambiara de tamaño
        utils.redrawTree(dropBloq, bloqs, connectors);
    };

    var connectOutputBloq = function (bloq, $dropConnector) {
        var dropConnectorUuid = $dropConnector.attr('data-connector-id');
        var dragConnectorUuid = utils.getOutputConnector(bloq, IOConnectors).uuid;

        $dropConnector.append(bloq.$bloq);
        bloq.$bloq.addClass('nested-bloq').removeAttr('style');

        IOConnectors[dropConnectorUuid].connectedTo = dragConnectorUuid;
        IOConnectors[dragConnectorUuid].connectedTo = dropConnectorUuid;

        var dropBloq = utils.getBloqByConnectorUuid(dropConnectorUuid, bloqs, IOConnectors);
        var dragBloq = utils.getBloqByConnectorUuid(dragConnectorUuid, bloqs, IOConnectors);

        if (dropBloq.bloqData.returnType && (dropBloq.bloqData.returnType.type === 'fromInput')) {
            if (!dragBloq.bloqData.returnType.pointer) {
                updateSoftVar(dropBloq);
            }
        }
    };

    var handleCollisions = function (dragConnectors) {
        var i,
            found,
            $dropConnector,
            $dragConnector,
            tempBloq;

        // For each available connector
        availableConnectors.forEach(function (dropConnectorUuid) {
            $dropConnector = connectors[dropConnectorUuid].jqueryObject;
            i = 0;
            found = false;
            while (!found && (i < dragConnectors.length)) {
                $dragConnector = connectors[dragConnectors[i]].jqueryObject;

                if ((connectors[dragConnectors[i]].data.type === connectors[dropConnectorUuid].data.accept) && utils.canConnectAliases(connectors[dropConnectorUuid].data.acceptedAliases, connectors[dragConnectors[i]].data.acceptedAliases) && utils.itsOver($dragConnector, $dropConnector, 20)) {
                    found = true;
                } else {
                    i++;
                }
            }
            tempBloq = utils.getBloqByConnectorUuid(dropConnectorUuid, bloqs, connectors);
            if (found) {
                $dropConnector.addClass('available');
                $dropConnector.attr('data-canconnectwith', dragConnectors[i]);

                if (tempBloq.bloqData.type === 'group') {
                    tempBloq.$bloq.addClass('bloq--dragging');
                }
            } else {
                if (tempBloq.bloqData.type === 'group') {
                    tempBloq.$bloq.removeClass('bloq--dragging');
                }
                $dropConnector.removeClass('available');
                $dropConnector.removeAttr('data-canconnectwith');
            }
        });
    };

    var handleIOCollisions = function (bloq, availableIOConnectors) {
        var dropConnector;
        var dragConnector = utils.getOutputConnector(bloq, IOConnectors);
        availableIOConnectors.forEach(function (dropConnectorUuid) {
            dropConnector = IOConnectors[dropConnectorUuid];
            if (utils.itsOver(dragConnector.jqueryObject, dropConnector.jqueryObject, 0) && utils.sameConnectionType(bloqs[dragConnector.bloqUuid], bloqs[dropConnector.bloqUuid], dropConnector.data.acceptType, bloqs, IOConnectors, softwareArrays, componentsArray)) {
                dropConnector.jqueryObject.addClass('available');
            } else {
                dropConnector.jqueryObject.removeClass('available');

            }
        });
    };

    var setLogicalConnections = function (dropConnectorUuid, dragConnectorUUid) {
        //console.log('conectamos', dropConnectorUuid, connectors[dropConnectorUuid].data.type, 'con ', dragConnectorUUid, connectors[dragConnectorUUid].data.type);
        //console.log('conectado con', connectors[dropConnectorUuid].connectedTo, 'y el otro con', connectors[dragConnectorUUid].connectedTo);
        if (connectors[dropConnectorUuid].connectedTo) {
            var dropBottomConnectorUuid, dragBloqLastBottomConnectorUuid, dropTopConnectorUuid, dragBloqFirstTopConnectorUuid;
            switch (connectors[dropConnectorUuid].data.type) {
                case 'connector--bottom':
                    dropBottomConnectorUuid = connectors[dropConnectorUuid].connectedTo;
                    dragBloqLastBottomConnectorUuid = utils.getLastBottomConnectorUuid(connectors[dragConnectorUUid].bloqUuid, bloqs, connectors);
                    connectors[dragBloqLastBottomConnectorUuid].connectedTo = dropBottomConnectorUuid;
                    connectors[dropBottomConnectorUuid].connectedTo = dragBloqLastBottomConnectorUuid;
                    break;
                case 'connector--top':
                    dropTopConnectorUuid = connectors[dropConnectorUuid].connectedTo;
                    dragBloqFirstTopConnectorUuid = utils.getFirstTopConnectorUuid(connectors[dragConnectorUUid].bloqUuid, bloqs, connectors);
                    connectors[dropTopConnectorUuid].connectedTo = dragBloqFirstTopConnectorUuid;
                    connectors[dragBloqFirstTopConnectorUuid].connectedTo = dropTopConnectorUuid;
                    break;
                case 'connector--root':
                    dropBottomConnectorUuid = connectors[dropConnectorUuid].connectedTo;
                    dragBloqLastBottomConnectorUuid = utils.getLastBottomConnectorUuid(connectors[dragConnectorUUid].bloqUuid, bloqs, connectors);
                    connectors[dragBloqLastBottomConnectorUuid].connectedTo = dropBottomConnectorUuid;
                    connectors[dropBottomConnectorUuid].connectedTo = dragBloqLastBottomConnectorUuid;
                    break;
                default:
                    throw 'connector on setLogicalConnections no handled ' + connectors[dropConnectorUuid].data.type;
            }
        }
        connectors[dropConnectorUuid].connectedTo = dragConnectorUUid;
        connectors[dragConnectorUUid].connectedTo = dropConnectorUuid;
    };

    var placeNestedBloq = function (dropConnectorUuid, dragConnectorUuid) {
        //console.log('Nest');

        var dropBloq = bloqs[connectors[dropConnectorUuid].bloqUuid];
        //console.log(dropBloq, dragBloq);

        switch (dropBloq.bloqData.type) {
            case 'statement':
            case 'statement-input':
                utils.redrawTree(utils.getBloqByConnectorUuid(dragConnectorUuid, bloqs, connectors), bloqs, connectors);
                break;
            case 'output':
                break;
            default:
                throw 'bloqtype not defined in nesting ' + dropBloq.bloqData.type;
        }
    };

    var updateSoftVar = function (bloq, name, type) {
        var dynamicContentType = bloq.bloqData.createDynamicContent;
        //console.log('updating softVar', dynamicContentType);
        if (!dynamicContentType) {
            throw 'We are adding a softVar on a bloq that not defined the dynamic content';
        }
        if (!softwareArrays[dynamicContentType]) {
            throw 'dynamicContentType not defined ' + bloq.bloqData.name;
        }
        var found = false,
            i = 0;
        while (!found && (i < softwareArrays[dynamicContentType].length)) {
            if (softwareArrays[dynamicContentType][i].bloqUuid === bloq.uuid) {
                found = true;
            }
            i++;
        }
        type = type || utils.getTypeFromBloq(bloq, bloqs, IOConnectors, softwareArrays, componentsArray);

        var softVar;
        if (found) {
            softVar = softwareArrays[dynamicContentType][i - 1];
            softVar.name = name || softVar.name;
            softVar.type = type;

            if (softVar.name) {
                //cambiar data-value cuando el valor sea el mismo que el de la variable que se cambia
                // $('select[data-varreference=' + softVar.id + ']').attr({
                //     'data-value': softVar.name
                // });
                $('option[data-var-id="' + softVar.id + '"]').attr({
                    value: softVar.name
                }).html(softVar.name);

            } else {
                removeSoftVar(bloq);
            }

        } else {
            if (name) {
                softVar = {
                    name: name,
                    id: utils.generateUUID(),
                    bloqUuid: bloq.uuid,
                    type: type
                };
                softwareArrays[dynamicContentType].push(softVar);
                $('select[data-dropdowncontent="' + dynamicContentType + '"]').append($('<option>').attr({
                    'data-var-id': softVar.id,
                    value: softVar.name
                }).html(softVar.name));
            }
        }
        //update type of all vars
        updateSoftVarTypes(softwareArrays, dynamicContentType, bloqs, IOConnectors);
        // console.log('afterUpdating: ', softwareArrays);
    };

    var removeSoftVar = function (bloq) {
        var dynamicContentType = bloq.bloqData.createDynamicContent;
        var found = false,
            i = 0;
        while (!found && (i < softwareArrays[dynamicContentType].length)) {
            if (softwareArrays[dynamicContentType][i].bloqUuid === bloq.uuid) {
                found = true;
            }
            i++;
        }
        if (found) {
            var softVar = softwareArrays[dynamicContentType][i - 1];
            softwareArrays[dynamicContentType].splice(i - 1, 1);
            $('option[data-var-id="' + softVar.id + '"]').remove();
        }
        updateSoftVarTypes(softwareArrays, dynamicContentType, bloqs, IOConnectors);
    };

    var updateSoftVarTypes = function (softwareArrays, dynamicContentType, bloqs, IOConnectors) {
        //refresh type of functions and vars
        if ((dynamicContentType === 'returnFunctions') || (dynamicContentType === 'softwareVars')) {
            refreshSoftVarTypes(softwareArrays, 'returnFunctions', bloqs, IOConnectors);
            refreshSoftVarTypes(softwareArrays, 'softwareVars', bloqs, IOConnectors);
        } else {
            refreshSoftVarTypes(softwareArrays, dynamicContentType, bloqs, IOConnectors);
        }


        //console.log('dynamicContentType updated', dynamicContentType);
        //utils.drawSoftwareArray(softwareArrays);
    };

    function refreshSoftVarTypes(softwareArrays, dynamicContentType, bloqs, IOConnectors) {
        var tempSoftVar;
        for (var i = 0; i < softwareArrays[dynamicContentType].length; i++) {
            tempSoftVar = softwareArrays[dynamicContentType][i];
            tempSoftVar.type = utils.getTypeFromBloq(bloqs[tempSoftVar.bloqUuid], bloqs, IOConnectors, softwareArrays, componentsArray);
        }
    }

    var removeBloq = function (bloqUuid, redraw, removeAllConnectedBloqs) {

        var bloq = bloqs[bloqUuid],
            i;
        //console.log('remove:', bloqUuid);
        if (bloq) {
            //console.log('remove bloq name:', bloq.bloqData.name);
            //disconnect
            var topConnector, bottomConnector, outputConnector;
            window.dispatchEvent(new Event('bloqs:bloqremoved'));
            bloq.$bloq[0].removeEventListener('mousedown', bloqMouseDown);

            if (bloq.$suggestedField) {
                bloq.$suggestedField.removeEventListener('click', bloqSuggestedFieldClick);
            }
            //remove listener of suggested window
            if (bloq.$bloqInputs) {
                for (i = 0; i < bloq.$bloqInputs.length; i++) {
                    bloq.$bloqInputs[i].off('click');
                }
            }

            //if its moving remove all listener
            if ((mouseDownBloq && mouseDownBloq.getAttribute('data-bloq-id') === bloqUuid) ||
                (draggingBloq && draggingBloq.uuid)) {

                document.removeEventListener('mouseup', bloqMouseUpBeforeMove);
                document.removeEventListener('mousemove', bloqPreMouseMove);
                document.removeEventListener('mousemove', bloqMouseMove);
                document.removeEventListener('mouseup', bloqMouseUp);


                document.removeEventListener('touchend', bloqMouseUpBeforeMove);
                document.removeEventListener('touchmove', bloqPreMouseMove);
                document.removeEventListener('touchmove', bloqMouseMove);
                document.removeEventListener('touchend', bloqMouseUp);
            }
            //no break sentences
            switch (bloq.bloqData.type) {
                case 'statement-input':
                    bloq.$bloq.find('.btn-collapse')[0].removeEventListener('click', collapseButtonClick);
                case 'group':
                    var childConnector = connectors[bloq.connectors[2]].connectedTo;
                    if (childConnector) {
                        var tempBloq = utils.getBloqByConnectorUuid(childConnector, bloqs, connectors);
                        removeBloq(tempBloq.uuid, redraw, removeAllConnectedBloqs);
                    }
                /* falls through */
                case 'statement':

                    topConnector = connectors[bloq.connectors[0]].connectedTo;
                    bottomConnector = connectors[bloq.connectors[1]].connectedTo;
                    var previousBloq;
                    if (removeAllConnectedBloqs) {
                        if (topConnector) {
                            connectors[topConnector].connectedTo = null;
                            if (connectors[topConnector].data.type === 'connector--root') {
                                previousBloq = bloqs[connectors[topConnector].bloqUuid];
                                if (previousBloq.bloqData.type === 'group') {
                                    previousBloq.$bloq.removeClass('with--content');
                                }

                                if (redraw) {
                                    utils.redrawTree(utils.getBloqByConnectorUuid(topConnector, bloqs, connectors), bloqs, connectors);
                                }
                            } else {
                                removeBloq(connectors[topConnector].bloqUuid, redraw, removeAllConnectedBloqs);
                            }

                        }
                        if (bottomConnector) {
                            connectors[bottomConnector].connectedTo = null;
                            removeBloq(connectors[bottomConnector].bloqUuid, redraw, removeAllConnectedBloqs);
                        }
                    } else {
                        if (topConnector && bottomConnector) {
                            connectors[topConnector].connectedTo = bottomConnector;
                            connectors[bottomConnector].connectedTo = topConnector;

                            if (redraw) {
                                utils.redrawTree(utils.getBloqByConnectorUuid(topConnector, bloqs, connectors), bloqs, connectors);
                            }

                        } else if (topConnector) {
                            connectors[topConnector].connectedTo = null;
                            previousBloq = bloqs[connectors[topConnector].bloqUuid];
                            if (previousBloq.bloqData.type === 'group') {
                                previousBloq.$bloq.removeClass('with--content');
                            }

                            if (redraw) {
                                utils.redrawTree(utils.getBloqByConnectorUuid(topConnector, bloqs, connectors), bloqs, connectors);
                            }
                        } else if (bottomConnector) {
                            connectors[bottomConnector].connectedTo = null;
                        }
                    }


                    //remove the inputs bloqs inside in 1 level
                    var uuid;
                    for (i = 0; i < bloq.IOConnectors.length; i++) {
                        uuid = bloq.IOConnectors[i];
                        if ((IOConnectors[uuid].data.type === 'connector--input') && IOConnectors[uuid].connectedTo) {
                            removeBloq(IOConnectors[IOConnectors[uuid].connectedTo].bloqUuid, redraw, removeAllConnectedBloqs);
                        }
                    }
                    break;
                case 'output':
                    outputConnector = IOConnectors[bloq.IOConnectors[0]].connectedTo;

                    if (outputConnector) {
                        IOConnectors[outputConnector].connectedTo = null;
                    }
                    break;
                default:
                    throw 'we dont know how to delete: ' + bloq.bloqData.type;
            }

            //remove visual
            bloq.$bloq.remove();
            //removeLogical
            var key;
            for (i = 0; i < bloq.connectors.length; i++) {
                delete connectors[bloq.connectors[i]];
            }
            for (i = 0; i < bloq.IOConnectors.length; i++) {
                delete IOConnectors[bloq.IOConnectors[i]];
            }

            //si es un bloq que genera dinmayc content
            if (bloq.bloqData.createDynamicContent) {
                removeSoftVar(bloq);
            } else {
                for (key in softwareArrays) {
                    updateSoftVarTypes(softwareArrays, key, bloqs, IOConnectors);
                }
            }

            //remove the bloq
            delete bloqs[bloqUuid];

        } else {
            throw 'Cant delete this bloq: ' + bloqUuid;
        }

    };

    var buildContent = function (bloq) {

        var bloqData = bloq.bloqData;
        var $tempElement;
        for (var j = 0; j < bloqData.content.length; j++) {
            for (var k = 0; k < bloqData.content[j].length; k++) {
                $tempElement = createBloqElement(bloq, bloqData.content[j][k], softwareArrays);
                if (bloqData.content[j][k].position === 'DOWN') {
                    bloq.$contentContainerDown.addClass('with-content');
                    bloq.$contentContainerDown.append($tempElement);
                } else {
                    bloq.$contentContainer.append($tempElement);
                }
            }
        }
    };

    var buildStatementConnector = function (tempUuid, bloqConnectors, bloq, tempConnector, $container) {
        var $connector = $('<div>').attr({
            'data-connector-id': tempUuid
        });

        $connector.addClass('connector connector--offline ' + bloqConnectors.type);

        $container.append($connector);

        connectors[tempUuid] = tempConnector;

        bloq.connectors.push(tempUuid);
        return $connector;
    };

    var buildConnectors = function (bloqConnectors, bloq) {
        //connectors
        var $connector, tempUuid, tempConnector, $container;
        for (var i = 0; i < bloqConnectors.length; i++) {

            tempUuid = 'connector:' + utils.generateUUID();

            tempConnector = {
                uuid: tempUuid,
                data: bloqConnectors[i],
                bloqUuid: bloq.uuid,
                connectedTo: null
            };

            switch (bloqConnectors[i].type) {
                case 'connector--top':
                    if (bloq.bloqData.type === 'statement-input') {
                        $container = bloq.$bloq.children('.bloq--statement-input__header');
                    } else {
                        $container = bloq.$bloq.children('.bloq--fixed');
                    }
                    $connector = buildStatementConnector(tempUuid, bloqConnectors[i], bloq, tempConnector, $container);
                    break;
                case 'connector--bottom':
                    if (bloq.bloqData.type === 'statement-input') {
                        $container = bloq.$bloq.find('.bloq--extension--end');
                    } else {
                        $container = bloq.$bloq.children('.bloq--fixed');
                    }
                    $connector = buildStatementConnector(tempUuid, bloqConnectors[i], bloq, tempConnector, $container);
                    break;
                case 'connector--root':
                    if (bloq.bloqData.type === 'statement-input') {
                        $container = bloq.$bloq.children('.bloq--statement-input__header');
                    } else {
                        $container = bloq.$bloq;
                    }
                    $connector = buildStatementConnector(tempUuid, bloqConnectors[i], bloq, tempConnector, $container);

                    break;
                case 'connector--input':
                    $connector = $(bloq.$bloq.find('.bloqinput[data-connector-name="' + bloqConnectors[i].name + '"]'));

                    $connector.attr({
                        'data-connector-id': tempUuid
                    }).addClass('connector ' + bloqConnectors[i].type);
                    tempConnector.contentId = $connector.attr('data-content-id');
                    IOConnectors[tempUuid] = tempConnector;
                    bloq.IOConnectors.push(tempUuid);
                    break;
                case 'connector--output':
                    $connector = $('<div>').attr({
                        'data-connector-id': tempUuid
                    }).addClass('connector connector--offline ' + bloqConnectors[i].type);

                    bloq.$bloq.append($connector);

                    tempConnector.returnType = bloq.bloqData.returnType;
                    IOConnectors[tempUuid] = tempConnector;

                    bloq.IOConnectors.push(tempUuid);
                    break;
                case 'connector--empty':
                    $connector = $('<div>');
                    connectors[tempUuid] = tempConnector;

                    bloq.connectors.push(tempUuid);
                    break;
                default:
                    throw 'Connector not defined to build';
            }
            tempConnector.jqueryObject = $connector;
        }
    };

    var createBloqElement = function (bloq, elementSchema, softwareArrays) {
        var i,
            $tempElement,
            $element = null,
            arrayOptions,
            key;
        switch (elementSchema.alias) {
            case 'staticDropdown':
                //component
                $element = $('<select>');
                $element.attr({
                    name: '',
                    'data-content-id': elementSchema.id
                });

                var childs = [];
                for (i = 0; i < elementSchema.options.length; i++) {
                    $tempElement = $('<option>').attr({
                        value: elementSchema.options[i].value,
                        'data-i18n': elementSchema.options[i].label
                    }).html(translateBloq(lang, elementSchema.options[i].label));
                    childs.push($tempElement);
                }
                utils.appendArrayInOneTime($element, childs);
                if (elementSchema.value) {
                    $element.val(elementSchema.value);
                }

                $element.change(function () {
                    window.dispatchEvent(new Event('bloqs:change'));
                });

                if (bloq.bloqData.returnType && bloq.bloqData.returnType.type === 'fromDropdown') {
                    $element.change(function () {
                        updateSoftVar(bloq);
                    });
                }

                break;
            case 'dynamicDropdown':
                $element = $('<select>');
                $element.attr({
                    name: '',
                    'data-content-id': elementSchema.id,
                    'data-dropdowncontent': elementSchema.options,
                    'data-value': elementSchema.value
                });

                switch (elementSchema.options) {
                    case 'voidFunctions':
                    case 'returnFunctions':
                    case 'softwareVars':
                    case 'classes':
                    case 'objects':
                        arrayOptions = softwareArrays[elementSchema.options];
                        $element.change(function () {
                            //if we change a dynamicDropdown, can be for two reasons
                            // We are a output and we refresh vars of the old BLoq
                            // We are selecting a variable in a statement, and we update the dont change type
                            if (bloq.bloqData.type === 'output') {
                                var outputConnector = utils.getOutputConnector(bloq, IOConnectors);
                                //if its connected to another bloq, we update the vars of the old bloq
                                if (outputConnector.connectedTo) {

                                    var bloqConnector = IOConnectors[outputConnector.connectedTo],
                                        oldBloq = bloqs[bloqConnector.bloqUuid];

                                    if (oldBloq.bloqData.returnType && (oldBloq.bloqData.returnType.type === 'fromInput')) {
                                        updateSoftVar(oldBloq);
                                    }
                                }
                            }
                        });
                        break;
                    case 'allServos':
                        arrayOptions = [];

                        arrayOptions = arrayOptions.concat(componentsArray.servos, componentsArray.oscillators, componentsArray.continuousServos);
                        break;
                    case 'sensors':
                        arrayOptions = [];

                        arrayOptions = arrayOptions.concat(componentsArray.sensors, componentsArray.mkb_lightsensor,
                            componentsArray.mkb_linefollower, componentsArray.mkb_soundsensor,
                            componentsArray.joystick, componentsArray.mkb_4buttonKeyPad,
                            componentsArray.remoteControl, componentsArray.mkb_motionSensor,
                            componentsArray.freakscar_integrated_remote, componentsArray.freakscar_integrated_lightsensor,
                            componentsArray.mkb_compass);
                        break;
                    case 'varComponents':
                        arrayOptions = [];

                        for (key in componentsArray) {
                            if (componentsArray[key].length >= 1) {
                                arrayOptions = arrayOptions.concat(componentsArray[key]);
                            }
                        }
                        break;
                    case 'clocks':
                        arrayOptions = [];
                        arrayOptions = componentsArray.clocks;
                        break;
                    case 'hts221':
                        arrayOptions = [];
                        arrayOptions = componentsArray.hts221;
                        break;
                    case 'barometer':
                        arrayOptions = [];
                        arrayOptions = componentsArray.barometer;
                    default:
                        arrayOptions = componentsArray[elementSchema.options];
                }
                if (!arrayOptions) {
                    throw 'Dropdowns not defined in array: ' + elementSchema.options;
                }

                //content
                utils.drawDropdownOptions($element, arrayOptions);

                if (elementSchema.value) {
                    $element.val(elementSchema.value);
                    var componentRef = arrayOptions.find(function (item) {
                        return item.name === elementSchema.value;
                    });
                    $element[0].dataset.reference = componentRef ? componentRef.uid : '';
                    $element[0].dataset.value = elementSchema.value;
                    $element.val(elementSchema.value);
                }

                $element.change(function (evt) {
                    $element[0].dataset.value = evt.currentTarget.value;
                    $element[0].dataset.reference = evt.currentTarget.selectedOptions[0].dataset.reference;
                    //$element[0].dataset.varreference = evt.currentTarget.selectedOptions[0].dataset.varId;
                    window.dispatchEvent(new Event('bloqs:change'));
                });

                break;
            case 'text':
                $element = $('<span>').attr({
                    'data-i18n': elementSchema.value
                }).html(translateBloq(lang, elementSchema.value));
                break;
            case 'removableText':
                $element = $('<span>').html(elementSchema.value);
                $element.addClass('removabletext');

                break;
            case 'numberInput':
                $element = $('<input>').attr({
                    type: 'text',
                    'data-content-id': elementSchema.id,
                    'data-placeholder-i18n': elementSchema.placeholder,
                    placeholder: translateBloq(lang, elementSchema.placeholder)
                }).val(elementSchema.value);
                //Check that the characters are numbers
                $element.bind('input', function () {
                    var position = utils.getCaretPosition(this);
                    var a = utils.validNumber($(this).val());
                    $(this).val(a.value);
                    utils.setCaretPosition(this, position - a.removedChar);
                });
                $element.on('keyup', function (evt) {
                    $(evt.currentTarget).autoGrowInput({
                        minWidth: 60,
                        comfortZone: 30
                    });
                });
                $element.change(function () {
                    //console.log('change number!');
                    window.dispatchEvent(new Event('bloqs:change'));
                });
                break;
            case 'stringInput':
                $element = $('<input>').attr({
                    type: 'text',
                    'data-content-id': elementSchema.id,
                    'data-content-type': elementSchema.alias,
                    'data-placeholder-i18n': elementSchema.placeholder,
                    placeholder: translateBloq(lang, elementSchema.placeholder)
                }).val(elementSchema.value || translateBloq(lang, elementSchema.defaultValue));
                $element.on('keyup', function (evt) {
                    $(evt.currentTarget).autoGrowInput({
                        minWidth: 100,
                        comfortZone: 30
                    });
                });
                $element.change(function () {
                    $element.val(utils.validString($element.val()));
                    //console.log('change String!');
                    window.dispatchEvent(new Event('bloqs:change'));
                });
                break;
            case 'charInput':
                $element = $('<input>').attr({
                    type: 'text',
                    'data-content-id': elementSchema.id,
                    'data-content-type': elementSchema.alias,
                    'data-placeholder-i18n': elementSchema.placeholder,
                    placeholder: translateBloq(lang, elementSchema.placeholder)
                }).val(elementSchema.value);
                $element.on('keyup', function (evt) {
                    $(evt.currentTarget).autoGrowInput({
                        minWidth: 10,
                        comfortZone: 0
                    });
                });
                $element.change(function () {
                    $element.val(utils.validChar($element.val()));
                    //console.log('change Char!');
                    window.dispatchEvent(new Event('bloqs:change'));
                });
                break;
            case 'codeInput':
                $element = $('<input>').attr({
                    type: 'text',
                    'data-content-id': elementSchema.id,
                    'data-content-type': elementSchema.alias,
                    'data-placeholder-i18n': elementSchema.placeholder,
                    placeholder: translateBloq(lang, elementSchema.placeholder)
                }).val(elementSchema.value);
                $element.on('keyup', function (evt) {
                    $(evt.currentTarget).autoGrowInput({
                        minWidth: 100,
                        comfortZone: 30
                    });
                });
                $element.change(function () {
                    //console.log('change SCinput!');
                    window.dispatchEvent(new Event('bloqs:change'));
                });
                break;
            case 'multilineCodeInput':
                $element = $('<textarea class="msd-elastic: \n;" ng-model="bar" cols="40" rows="1"></textarea>').attr({
                    'data-content-id': elementSchema.id,
                    'data-content-type': elementSchema.alias,
                    'name': elementSchema.id,
                    'data-placeholder-i18n': elementSchema.placeholder,
                    placeholder: translateBloq(lang, elementSchema.placeholder)
                }).val(elementSchema.value);
                setTimeout(function () {
                    $('[name="' + elementSchema.id + '"]').autogrow({
                        onInitialize: true
                    });
                }, 0);
                $element.change(function () {
                    //console.log('change multilineCode!');
                    window.dispatchEvent(new Event('bloqs:change'));
                });
                break;
            case 'multilineCommentInput':
                $element = $('<textarea class="msd-elastic: \n;" ng-model="bar" cols="40" rows="1"></textarea>').attr({
                    'data-content-id': elementSchema.id,
                    'data-content-type': elementSchema.alias,
                    'name': elementSchema.id,
                    'data-placeholder-i18n': elementSchema.placeholder,
                    placeholder: translateBloq(lang, elementSchema.placeholder)
                }).val(elementSchema.value);
                setTimeout(function () {
                    $('[name="' + elementSchema.id + '"]').autogrow({
                        onInitialize: true
                    });
                }, 0);

                $element.keyup(function () {
                    bloqsUtils.delay(function () {
                        $element.val(utils.validComment($element.val()));
                    }, 1000);
                });

                $element.change(function () {
                    $element.val(utils.validComment($element.val()));
                    //console.log('change multilineComment!');
                    window.dispatchEvent(new Event('bloqs:change'));
                });
                break;
            case 'varInput':
                $element = $('<input>').attr({
                    type: 'text',
                    'data-content-id': elementSchema.id,
                    'data-placeholder-i18n': elementSchema.placeholder,
                    placeholder: translateBloq(lang, elementSchema.placeholder)
                }).val(elementSchema.value);

                bloq.varInputs = [];
                bloq.varInputs.push($element);
                $element.addClass('var--input');
                $element.on('keyup', function (evt) {
                    $(evt.currentTarget).autoGrowInput({
                        minWidth: 100,
                        comfortZone: 30
                    });
                });
                //Transform the name to create valid function / variables names
                $element.keyup(function () {
                    //console.log(bloq);
                    bloqsUtils.delay(function () {
                        var name = utils.validName($element.val(), bloq.uuid, softwareArrays);
                        $element.val(name);
                        if (name) {
                            updateSoftVar(bloq, name);
                        } else {
                            removeSoftVar(bloq, name);
                        }
                    }, 1000, bloq.uuid);
                });

                $element.change(function () {
                    //console.log('change varInput!');
                    window.dispatchEvent(new Event('bloqs:change'));
                });
                break;
            case 'bloqInput':
                $element = $('<div>').attr({
                    'data-connector-name': elementSchema.name,
                    'data-content-id': elementSchema.bloqInputId
                });
                $element.addClass('bloqinput');

                $element.click(showBloqInputSuggestedWindow);
                if (!bloq.$bloqInputs) {
                    bloq.$bloqInputs = [];
                }
                //store bloq input to remove listeners from suggested windows
                bloq.$bloqInputs.push($element);
                break;
            case 'headerText':
                $element = $('<h3>').html(elementSchema.value);
                $element.addClass('headerText');
                break;
            case 'descriptionText':
                $element = $('<p>').html(elementSchema.value);
                $element.addClass('descriptionText');
                break;
            case 'dotsMatrix':
                $element = $('<div class="bloqs-dotsMatrix">');
                $element.click(function (evt) {
                    showDotsMatrix(elementSchema, evt);
                });
                break;
            default:
                throw 'elementSchema not defined: ' + elementSchema.alias;
        }

        return $element;
    };

    function showDotsMatrix(elementSchema, evt) {
        var launcherRect = evt.target.getBoundingClientRect();
        var workspaceRect = $field[0].getBoundingClientRect();
        var params = {
            launcherTopPoint: {
                top: launcherRect.top,
                left: launcherRect.left
            },
            launcherBottomPoint: {
                top: launcherRect.bottom,
                left: launcherRect.left
            },
            launcherHeight: launcherRect.height,
            workspaceHeight: workspaceRect.height,
            workspaceWidth: workspaceRect.width,
            fieldOffsetTop: getFieldOffsetTop(fieldOffsetTopSource),
            fieldOffsetLeft: fieldOffsetLeft,
            fieldOffsetRight: fieldOffsetRight,
            fieldScrollTop: $field[0].scrollTop,
            fieldScrollLeft: $field[0].scrollLeft,
            dotsMatrixOptions: elementSchema
        };
        params.showWindowCallback = function (response) {
            elementSchema.value = response;
            window.dispatchEvent(new Event('bloqs:change'));
        };
        bloqsDotsMatrix.showDotsWindow(params);
    };

    function showSuggestedWindow(args) {
        var launcherRect = args.launcherRect.getBoundingClientRect(),
            workspaceRect = $field[0].getBoundingClientRect(),
            params = {
                offsetWidth: args.offsetWidth,
                suggestedText: translateBloq(lang, 'suggested'),
                noSuggestedText: translateBloq(lang, 'no-suggested'),
                launcherTopPoint: {
                    top: launcherRect.top,
                    left: launcherRect.left
                },
                launcherBottomPoint: {
                    top: launcherRect.bottom,
                    left: launcherRect.left
                },
                launcherHeight: launcherRect.height,
                workspaceHeight: workspaceRect.height,
                workspaceWidth: workspaceRect.width,
                fieldOffsetTop: getFieldOffsetTop(fieldOffsetTopSource),
                fieldOffsetLeft: fieldOffsetLeft,
                fieldOffsetRight: fieldOffsetRight,
                fieldScrollTop: $field[0].scrollTop,
                fieldScrollLeft: $field[0].scrollLeft,
                availableBloqs: availableBloqs,
                suggestedBloqs: filterSuggestedBloqs(args.suggestedBloqs, componentsArray, softwareArrays, availableBloqs, args.originalBloq),
                showWindowCallback: args.showWindowCallback
            };

        bloqsSuggested.showSuggestedWindow(params);
    };

    function showBloqInputSuggestedWindow(evt) {
        //console.log('click input', evt);
        //to avoid event on children and parents at the same time

        if (evt.target.hasAttribute('data-connector-name')) {
            var bloqConnectorUuid = evt.target.getAttribute('data-connector-id');
            //console.log('id', bloqConnectorUuid);
            var bloq = utils.getBloqByConnectorUuid(bloqConnectorUuid, bloqs, IOConnectors);
            //console.log(bloq.itsEnabled());
            if (bloq.itsEnabled()) {
                evt.stopPropagation();
                var suggestedBloqs;
                if (IOConnectors[bloqConnectorUuid]) {
                    suggestedBloqs = IOConnectors[bloqConnectorUuid].data.suggestedBloqs;
                } else if (connectors[bloqConnectorUuid]) {
                    suggestedBloqs = connectors[bloqConnectorUuid].data.suggestedBloqs;
                }
                showSuggestedWindow({
                    launcherRect: evt.target,
                    suggestedBloqs: suggestedBloqs,
                    showWindowCallback: function (selectedBloqId) {
                        var selectedBloq = bloqs[selectedBloqId];
                        if (!selectedBloq.isConnectable()) {
                            selectedBloq.doConnectable();
                        }
                        connectBloq(selectedBloq, IOConnectors[bloqConnectorUuid].jqueryObject);
                        window.dispatchEvent(new CustomEvent('bloqs:suggestedAdded', {
                            detail: bloq
                        }));
                    }
                });
            }
        }
    }

    function filterSuggestedBloqs(suggestedBloqs, componentsArray, softwareArrays, availableBloqs, originalBloq) {
        var filteredItems = [];
        for (var i = 0; i < suggestedBloqs.length; i++) {
            if (!availableBloqs || (availableBloqs && availableBloqs.indexOf(suggestedBloqs[i]) > -1)) {
                switch (suggestedBloqs[i]) {
                    case 'selectVariable':
                        if (softwareArrays.softwareVars.length > 0) {
                            filteredItems.push(suggestedBloqs[i]);
                        }
                        break;
                    case 'readSensor':
                        if (componentsArray.sensors.length > 0) {
                            filteredItems.push(suggestedBloqs[i]);
                        }
                        break;
                    case 'caseDefault':
                        if (originalBloq) {
                            if (!connectors[originalBloq.connectors[1]].connectedTo) {
                                filteredItems.push(suggestedBloqs[i]);
                            }
                        }
                        break;
                    case 'else':
                        if (!connectors[originalBloq.connectors[1]].connectedTo) {
                            filteredItems.push(suggestedBloqs[i]);
                        } else {
                            var bloq = utils.getBloqByConnectorUuid(connectors[originalBloq.connectors[1]].connectedTo, bloqs, connectors);
                            if ((bloq.bloqData.name !== 'else') && (bloq.bloqData.name !== 'elseif')) {
                                filteredItems.push(suggestedBloqs[i]);
                            }
                        }
                        break;
                    default:
                        filteredItems.push(suggestedBloqs[i]);
                }
            }

        }
        return filteredItems;
    }

    var translateBloqs = function (newLang) {
        if (newLang !== lang) {
            lang = newLang;
            var bloqElements, bloqPlaceholders, i18nKey;
            for (var currentBloq in bloqs) {

                bloqPlaceholders = bloqs[currentBloq].$bloq.find('[data-placeholder-i18n]');

                bloqElements = bloqs[currentBloq].$bloq.find('[data-i18n]');

                for (var i = 0; i < bloqPlaceholders.length; i++) {
                    i18nKey = bloqPlaceholders[i].getAttribute('data-placeholder-i18n');
                    bloqPlaceholders[i].placeholder = translateBloq(lang, i18nKey);
                }

                for (var j = 0; j < bloqElements.length; j++) {
                    i18nKey = bloqElements[j].getAttribute('data-i18n');
                    bloqElements[j].innerHTML = translateBloq(lang, i18nKey);
                }
            }
            bloqsSuggested.setSuggestedText(translateBloq(lang, 'suggested'));
        }
    };

    var destroyFreeBloqs = function () {
        var uuid, bloq;
        for (uuid in bloqs) {
            bloq = bloqs[uuid];
            if (bloq.isConnectable()) {
                switch (bloq.bloqData.type) {
                    case 'statement':
                    case 'statement-input':
                        if (!connectors[bloq.connectors[0]].connectedTo) {
                            removeBloq(uuid);
                        }
                        break;
                    case 'output':
                        if (!IOConnectors[bloq.IOConnectors[0]].connectedTo) {
                            removeBloq(uuid);
                        }
                        break;
                    case 'group':
                        break;
                    default:
                        throw 'its free? ' + bloq.bloqData.type;
                }
            }
        }
    };

    /**
     * Get bloqs that are not connected
     *
     */
    var getFreeBloqs = function () {
        var bloq,
            result = [],
            bloqGroup,
            tempBloq,
            connectedConnector;
        for (var uuid in bloqs) {
            bloq = bloqs[uuid];
            if (bloq.isConnectable()) {
                switch (bloq.bloqData.type) {
                    case 'statement':
                    case 'statement-input':
                        if (!connectors[bloq.connectors[0]].connectedTo) {
                            bloqGroup = [bloq.getBloqsStructure()];
                            connectedConnector = connectors[bloq.connectors[1]].connectedTo;
                            while (connectedConnector) {
                                tempBloq = utils.getBloqByConnectorUuid(connectedConnector, bloqs, connectors);
                                bloqGroup.push(tempBloq.getBloqsStructure());
                                connectedConnector = connectors[tempBloq.connectors[1]].connectedTo;
                            }
                            result.push({
                                position: bloq.$bloq.position(),
                                bloqGroup: bloqGroup
                            });
                        }
                        break;
                    case 'output':
                        if (!IOConnectors[bloq.IOConnectors[0]].connectedTo) {
                            bloqGroup = [bloq.getBloqsStructure()];
                            result.push({
                                position: bloq.$bloq[0].getBoundingClientRect(),
                                bloqGroup: bloqGroup
                            });
                        }
                        break;
                    case 'group':
                        break;
                    default:
                        throw 'its free? ' + bloq.bloqData.type;
                }
            }
        }
        return result;
    };

    var updateBloqsTimeout;
    var deferredUpdateBloqs;
    var startBloqsUpdate = function (componentsArrayUpdated) {
        componentsArray = componentsArrayUpdated;

        if (!updateBloqsTimeout) {
            deferredUpdateBloqs = Q.defer();
            updateBloqsTimeout = setTimeout(function () {
                updateBloqsTimeout = null;
                updateBloqs(componentsArray);
                deferredUpdateBloqs.resolve();
            }, 200);
        }
        return deferredUpdateBloqs.promise;
    };

    var updateBloqs = function (componentsArray) {

        var allComponents = [];

        function _resetDropdown(element, list) {
            if (list[0]) {
                element.dataset.reference = list[0].uid;
                element.dataset.value = list[0].name;
                element.value = list[0].name;
            } else {
                delete element.dataset.reference;
                delete element.dataset.value;
            }
            element.selectedIndex = 0;
        }

        var updateBloq = function (element, list) {

            var componentRef = list.find(function (comp) {
                return comp.uid === element.dataset.reference;
            });

            bloqsUtils.drawDropdownOptions($(element), list);

            if (componentRef) {
                element.value = componentRef.name;
                element.dataset.reference = componentRef.uid;
                element.dataset.value = componentRef.name;
            } else {
                _resetDropdown(element, list);
            }
        };
        var bloqCanvasEl = null,
            componentsList;
        //Update dropdowns values from bloqs canvas
        for (var type in componentsArray) {
            bloqCanvasEl = document.getElementsByClassName('bloqs-tab')[0];
            var nodeList = bloqCanvasEl.querySelectorAll('select[data-dropdowncontent="' + type + '"]');

            if (type === 'sensors') {
                /*jshint camelcase: false */
                componentsList = componentsArray.sensors.concat(componentsArray.mkb_lightsensor, componentsArray.mkb_linefollower,
                    componentsArray.mkb_soundsensor, componentsArray.joystick,
                    componentsArray.mkb_4buttonKeyPad, componentsArray.remoteControl,
                    componentsArray.mkb_motionSensor, componentsArray.freakscar_integrated_lightsensor,
                    componentsArray.freakscar_integrated_remote, componentsArray.mkb_compass);
                /*jshint camelcase: true */
            } else {
                componentsList = componentsArray[type];
            }
            for (var i = 0, len = nodeList.length; i < len; i++) {
                updateBloq(nodeList[i], componentsList);
            }
            allComponents = allComponents.concat(componentsArray[type]);
        }
        //Update dropdowns from bloqs of toolbox
        if (bloqCanvasEl) {
            var toolboxNodeList = bloqCanvasEl.querySelectorAll('select[data-dropdowncontent="varComponents"]');
            for (var j = 0, len2 = toolboxNodeList.length; j < len2; j++) {
                updateBloq(toolboxNodeList[j], allComponents);
            }

            var varServos = [];
            varServos = varServos.concat(componentsArray.servos, componentsArray.oscillators, componentsArray.continuousServos);
            var servosNodeList = bloqCanvasEl.querySelectorAll('select[data-dropdowncontent="allServos"]');
            for (var y = 0, lenServo = servosNodeList.length; y < lenServo; y++) {
                updateBloq(servosNodeList[y], varServos);
            }
        }
    };

    var updateDropdowns = function () {
        var key;
        for (key in softwareArrays) {
            updateDropdown(key);
        }
    };

    var updateDropdown = function (softwareArrayKey) {
        var $element, tempValue;
        $('select[data-dropdownContent="' + softwareArrayKey + '"]').each(function (index, element) {
            $element = $(element);
            tempValue = $element.attr('data-value');
            bloqsUtils.drawDropdownOptions($element, softwareArrays[softwareArrayKey]);
            if (tempValue) {
                $element.val(tempValue);
            }
        });
    };

    var translateBloq = function (lang, key) {
        if (!bloqsLanguages.texts[lang]) {
            console.error('Language not supported ' + lang);
            lang = 'en-GB';
        }
        return bloqsLanguages.texts[lang][key] || bloqsLanguages.texts['en-GB'][key] || bloqsLanguages.texts['es-ES'][key] || key;
    };

    function collapseButtonClick(evt) {
        //console.log('collapse IT!', evt);
        if (evt.target.parentElement.parentElement.className.indexOf(' collapsed') === -1) {
            evt.target.parentElement.parentElement.className = evt.target.parentElement.parentElement.className.concat(' collapsed');
            evt.target.innerHTML = '+';
        } else {
            evt.target.parentElement.parentElement.className = evt.target.parentElement.parentElement.className.replace(' collapsed', '');
            evt.target.innerHTML = '-';
        }

    }

    function bloqSuggestedFieldClick(evt) {
        //console.log('bloqSuggestedFieldClick');
        var bloq = this;

        showSuggestedWindow({
            launcherRect: evt.currentTarget,
            suggestedBloqs: bloq.bloqData.suggestedBloqs,
            offsetWidth: 40,
            originalBloq: bloq,
            showWindowCallback: function (selectedBloqId) {
                //console.log('showWindowCallback', selectedBloqId);
                var selectedBloq = bloqs[selectedBloqId];
                if (!selectedBloq.isConnectable()) {
                    selectedBloq.doConnectable();
                }

                connectBloq(selectedBloq, connectors[bloq.connectors[1]].jqueryObject);
                window.dispatchEvent(new CustomEvent('bloqs:suggestedAdded', {
                    detail: bloq
                }));

            }
        });
    }

    function recursiveActivationOfSuggestedBloqs(currentBloq) {
        var branchBloq, connectorInBranch;
        if (currentBloq.connectors[2]) {
            connectorInBranch = connectors[currentBloq.connectors[2]].connectedTo;
            if (connectorInBranch) {
                branchBloq = utils.getBloqByConnectorUuid(connectorInBranch, bloqs, connectors);
                recursiveActivationOfSuggestedBloqs(branchBloq);
            }
        }

        var nextConnectorInTree = connectors[currentBloq.connectors[1]].connectedTo;
        while (nextConnectorInTree) {
            currentBloq = utils.getBloqByConnectorUuid(nextConnectorInTree, bloqs, connectors);
            nextConnectorInTree = connectors[currentBloq.connectors[1]].connectedTo;
            if (currentBloq.connectors[2]) {
                connectorInBranch = connectors[currentBloq.connectors[2]].connectedTo;
                if (connectorInBranch) {
                    branchBloq = utils.getBloqByConnectorUuid(connectorInBranch, bloqs, connectors);
                    recursiveActivationOfSuggestedBloqs(branchBloq);
                }
            }
        }

        if (!nextConnectorInTree) {
            currentBloq.setSuggestedBloqsWindowsView(true);
        }
    }

    // Block Constructor
    var Bloq = function Bloq(params) {
        if (params.bloqData) {
            this.uuid = 'bloq:' + utils.generateUUID();

            if (params.$field && !params.$field.is($field)) {
                $field = params.$field;
                bloqsTooltip.addBloqsTooltip($field);
            }

            this.bloqData = _.cloneDeep(params.bloqData);
            componentsArray = params.componentsArray || componentsArray;

            this.connectors = [];
            this.IOConnectors = [];

            var enable = false,
                connectable,
                that = this;

            this.collapseGroupContent = function () {

                var $fieldContent = that.$bloq.children('.field--content');
                //$fieldContent = $(e.currentTarget).parent().find('.field--content');
                $fieldContent.toggleClass('field--collapsed');
                that.connectable = !that.connectable;
                $fieldContent.parent().toggleClass('collapsed--field');
            };

            this.enable = function (onlyParent) {
                if (!enable) {
                    this.$bloq.removeClass('disabled');
                    //console.log('activamos', this.uuid, this.bloqData.name);
                    if (this.bloqData.content && this.bloqData.content[0]) {
                        for (var i = 0; i < this.bloqData.content[0].length; i++) {
                            if (this.bloqData.content[0][i].alias === 'bloqInput') {
                                var uuid;
                                for (var j = 0; j < this.IOConnectors.length; j++) {
                                    uuid = this.IOConnectors[j];
                                    if ((IOConnectors[uuid].data.type === 'connector--input') && IOConnectors[uuid].connectedTo) {
                                        utils.getBloqByConnectorUuid(IOConnectors[uuid].connectedTo, bloqs, IOConnectors).enable();
                                    }
                                }
                            }
                        }
                    }

                    enable = true;

                    if (this.connectors[2] && !onlyParent) {
                        var connector = connectors[this.connectors[2]].connectedTo,
                            tempBloq;
                        while (connector) {
                            tempBloq = utils.getBloqByConnectorUuid(connector, bloqs, connectors);
                            tempBloq.enable();
                            connector = connectors[tempBloq.connectors[1]].connectedTo;
                        }
                    }
                }
            };

            this.disable = function (onlyParent) {
                this.$bloq.addClass('disabled');
                if (enable) {

                    //console.log('activamos', this.uuid, this.bloqData.name);
                    if (this.bloqData.content && this.bloqData.content[0]) {
                        for (var i = 0; i < this.bloqData.content[0].length; i++) {
                            switch (this.bloqData.content[0][i].alias) {
                                case 'bloqInput':
                                    //disable the inputs bloqs inside in 1 level
                                    var uuid;
                                    for (var j = 0; j < this.IOConnectors.length; j++) {
                                        uuid = this.IOConnectors[j];
                                        if ((IOConnectors[uuid].data.type === 'connector--input') && IOConnectors[uuid].connectedTo) {
                                            utils.getBloqByConnectorUuid(IOConnectors[uuid].connectedTo, bloqs, IOConnectors).disable();
                                        }
                                    }
                                    break;
                                default:
                            }
                        }
                    }

                    enable = false;

                    if (this.connectors[2] && !onlyParent) {
                        var connector = connectors[this.connectors[2]].connectedTo,
                            tempBloq;
                        while (connector) {
                            tempBloq = utils.getBloqByConnectorUuid(connector, bloqs, connectors);
                            tempBloq.disable();
                            connector = connectors[tempBloq.connectors[1]].connectedTo;
                        }
                    }
                }
            };

            this.itsEnabled = function () {
                return enable;
            };

            this.doConnectable = function () {
                if (!connectable) {
                    // console.log('make them connectable', this.uuid, this.bloqData.name);
                    if (this.bloqData.content && this.bloqData.content[0]) {
                        for (var i = 0; i < this.bloqData.content[0].length; i++) {
                            if (this.bloqData.content[0][i].alias === 'bloqInput') {
                                var uuid;
                                for (var j = 0; j < this.IOConnectors.length; j++) {
                                    uuid = this.IOConnectors[j];
                                    if ((IOConnectors[uuid].data.type === 'connector--input') && IOConnectors[uuid].connectedTo) {
                                        utils.getBloqByConnectorUuid(IOConnectors[uuid].connectedTo, bloqs, IOConnectors).doConnectable();
                                    }
                                }
                            }
                        }
                    }
                    if (this.connectors[2]) {
                        var connector = connectors[this.connectors[2]].connectedTo,
                            tempBloq;
                        while (connector) {
                            tempBloq = utils.getBloqByConnectorUuid(connector, bloqs, connectors);
                            tempBloq.doConnectable();
                            connector = connectors[tempBloq.connectors[1]].connectedTo;
                        }
                    }
                    connectable = true;
                    this.$bloq[0].dispatchEvent(new Event('bloq:connectable'));
                }
            };

            this.doNotConnectable = function () {
                connectable = false;
            };

            this.isConnectable = function () {
                return connectable;
            };

            this.itsFree = function () {
                return (this.$bloq.closest('.bloq--group').length === 0);
            };

            this.autoRemove = function () {
                removeBloq(this.uuid);
            };

            //creation
            this.$bloq = $('<div>').attr({
                'data-bloq-id': this.uuid,
                tabIndex: 0
            });

            this.$bloq.addClass('bloq bloq--' + this.bloqData.type + ' ' + this.bloqData.bloqClass);


            bloqs[this.uuid] = this;

            //this.disable();
            this.doNotConnectable();

            switch (this.bloqData.type) {
                case 'statement-input':
                    this.$bloq.append('<div class="bloq--statement-input__header"><button class="btn-collapse">-</button></div><div class="bloq--extension"><div class="bloq--extension__content"></div><div class="bloq--extension--end"></div></div></div>');

                    this.$contentContainer = this.$bloq.find('.bloq--statement-input__header');
                    this.$contentContainerDown = this.$bloq.find('.bloq--extension--end');
                    this.$extensionContent = this.$bloq.find('.bloq--extension__content');

                    if (suggestionOnStatements && this.bloqData.suggestedBloqs && (this.bloqData.suggestedBloqs.length > 0)) {
                        this.$bloq.addClass('suggestion-on');
                        this.$contentContainerDown.append('<div class="suggestion statement"></div>');
                        this.$suggestedField = this.$contentContainerDown.find('.suggestion.statement')[0];
                        this.$suggestedField.addEventListener('click', bloqSuggestedFieldClick.bind(this));
                    }

                    /*if (suggestionOnStatements && this.bloqData.statementInputSuggestedBloqs && (this.bloqData.statementInputSuggestedBloqs.length > 0)) {
                        this.$extensionContent.append('<div class="bloqs-suggested-field statement-input" data-i18n="suggested-bloqs"> <h4 class="suggestedfield-text">' + translateBloq(lang, 'suggested-bloqs') + '</h4></div>');
                        this.$statementInputSuggestedField = this.$bloq.find('.bloqs-suggested-field.statement-input')[0];
                        this.$statementInputSuggestedField.addEventListener('click', bloqSuggestedFieldClick.bind(this));
                        this.setStatementInputSuggestedBloqsWindowsView(false);
                    }*/
                    buildContent(this);
                    this.$bloq[0].addEventListener('mousedown', bloqMouseDown);
                    this.$bloq[0].addEventListener('touchstart', bloqMouseDown);
                    this.$bloq.find('.btn-collapse')[0].addEventListener('click', collapseButtonClick);
                    buildConnectors(params.bloqData.connectors, this);
                    this.$contentContainer.children().children().not('.connector.connector--offline').first().addClass('bloq__inner--first');
                    this.$contentContainer.children().children().not('.connector.connector--offline').last().addClass('bloq__inner--last');
                    this.$contentContainer.children().not('.connector.connector--offline').last().addClass('bloq__inner--last');
                    this.$contentContainerDown.children().not('.connector.connector--offline').first().addClass('bloq__inner--first');
                    this.$contentContainerDown.children().not('.connector.connector--offline').last().addClass('bloq__inner--last');
                    break;
                case 'statement':
                    this.$bloq.append('<div class="bloq--fixed">');
                    this.$contentContainer = this.$bloq.find('.bloq--fixed');
                    //this.$bloq.attr('draggable', true);
                    buildContent(this);
                    this.$bloq[0].addEventListener('mousedown', bloqMouseDown);
                    this.$bloq[0].addEventListener('touchstart', bloqMouseDown);
                    buildConnectors(params.bloqData.connectors, this);
                    this.$bloq.children().children().not('.connector.connector--offline').first().addClass('bloq__inner--first');
                    this.$bloq.children().children().not('.connector.connector--offline').last().addClass('bloq__inner--last');
                    break;
                case 'output':
                    this.$contentContainer = this.$bloq;
                    buildContent(this);
                    this.$bloq[0].addEventListener('mousedown', bloqMouseDown);
                    this.$bloq[0].addEventListener('touchstart', bloqMouseDown);
                    buildConnectors(params.bloqData.connectors, this);
                    this.$bloq.children().not('.connector.connector--offline').first().addClass('bloq__inner--first');
                    this.$bloq.children().not('.connector.connector--offline').last().addClass('bloq__inner--last');
                    break;
                case 'group':
                    this.$bloq.append('<div class="field--header"><button class="btn btn--collapsefield"></button><h3 data-i18n="' + this.bloqData.headerText + '">' + translateBloq(lang, this.bloqData.headerText) + '</h3></div><div class="field--content"><div class="bloq--extension--info"> <div class="bloq__info"><p class="bloq__info--text" data-i18n="' + this.bloqData.descriptionText + '">' + translateBloq(lang, this.bloqData.descriptionText) + '</p></div><p class="bloq--drag-bloq" data-i18n="drag-bloq">' + translateBloq(lang, 'drag-bloq') + '</p></div><div class="bloq--extension__content"></div></div>');
                    buildConnectors(params.bloqData.connectors, this);
                    this.$bloq.find('.connector--root').addClass('connector--root--group');
                    this.$bloq.find('.field--header .btn').on('click', this.collapseGroupContent);
                    this.$bloq.find('.field--header h3').on('click', this.collapseGroupContent);
                    mainBloqs.push(this);
                    break;
                default:
                    throw 'bloqData ' + this.bloqData.type + 'not defined in bloq construction';
            }

            if (this.bloqData.createDynamicContent) {
                var name = utils.validName(this.$bloq.find('input.var--input').val(), this.uuid);
                if (name) {
                    updateSoftVar(this, name);
                } else {
                    removeSoftVar(this, name);
                }
            }

            this.getIOConnectorUuidByContentId = function (contentId) {
                var found = false,
                    i = 0,
                    result = null;

                while (!found && (i < this.IOConnectors.length)) {
                    if (IOConnectors[this.IOConnectors[i]].contentId === contentId) {
                        found = true;
                        result = this.IOConnectors[i];
                    }
                    i++;
                }
                return result;
            };

            this.getBloqsStructure = function (fullStructure) {
                var result,
                    tempBloq;

                if (fullStructure) {
                    result = _.cloneDeep(this.bloqData);
                } else {
                    result = {
                        name: this.bloqData.name,
                        content: [
                            []
                        ]
                    };
                }
                result.enable = this.itsEnabled();

                var rootConnector = this.connectors[2];
                if (rootConnector) {
                    result.childs = [];
                    var connectedConnector = connectors[rootConnector].connectedTo;
                    while (connectedConnector) {
                        tempBloq = utils.getBloqByConnectorUuid(connectedConnector, bloqs, connectors);
                        result.childs.push(tempBloq.getBloqsStructure(fullStructure));
                        connectedConnector = connectors[tempBloq.connectors[1]].connectedTo;
                    }
                }

                var tempObject, value, selectedValue, attributeValue;
                if (this.bloqData.content[0]) {

                    for (var i = 0; i < this.bloqData.content[0].length; i++) {
                        tempObject = null;
                        switch (this.bloqData.content[0][i].alias) {
                            case 'varInput':
                            case 'stringInput':
                            case 'numberInput':
                            case 'multilineCodeInput':
                            case 'multilineCommentInput':
                            case 'codeInput':
                            case 'charInput':
                                value = this.$bloq.find('[data-content-id="' + this.bloqData.content[0][i].id + '"]').val();
                                if (value) {
                                    tempObject = {
                                        alias: this.bloqData.content[0][i].alias,
                                        id: this.bloqData.content[0][i].id,
                                        value: value
                                    };
                                }
                                break;
                            case 'bloqInput':
                                //get the inputs bloqs inside in 1 level
                                var uuid,
                                    connectedBloq;
                                uuid = this.getIOConnectorUuidByContentId(this.bloqData.content[0][i].bloqInputId);
                                if ((IOConnectors[uuid].data.type === 'connector--input') && IOConnectors[uuid].connectedTo) {
                                    connectedBloq = utils.getBloqByConnectorUuid(IOConnectors[uuid].connectedTo, bloqs, IOConnectors);
                                    tempObject = {
                                        alias: this.bloqData.content[0][i].alias,
                                        bloqInputId: this.bloqData.content[0][i].bloqInputId,
                                        value: connectedBloq.getBloqsStructure(fullStructure)
                                    };
                                }

                                break;
                            case 'dynamicDropdown':
                                attributeValue = this.$bloq.find('select[data-content-id="' + this.bloqData.content[0][i].id + '"][data-dropdowncontent="' + this.bloqData.content[0][i].options + '"]').attr('data-value');
                                selectedValue = this.$bloq.find('select[data-content-id="' + this.bloqData.content[0][i].id + '"][data-dropdowncontent="' + this.bloqData.content[0][i].options + '"]').val();
                                //only software Vars get value from val(), hardware, use attribute or val()
                                var variableType = this.bloqData.content[0][i].options,
                                    itsSoftwareValue = Object.keys(softwareArrays).indexOf(variableType),
                                    sensorsComponentsArray = componentsArray.sensors.concat(componentsArray.mkb_lightsensor, componentsArray.mkb_linefollower,
                                        componentsArray.mkb_soundsensor, componentsArray.joystick,
                                        componentsArray.mkb_4buttonKeyPad, componentsArray.remoteControl,
                                        componentsArray.mkb_motionSensor, componentsArray.freakscar_integrated_remote,
                                        componentsArray.freakscar_integrated_lightsensor, componentsArray.mkb_compass),
                                    valueType,
                                    j;

                                if (itsSoftwareValue !== -1) {
                                    value = selectedValue;
                                    j = 0;
                                    while (!valueType && (j < softwareArrays[variableType].length)) {
                                        if (softwareArrays[variableType][j].name === value) {
                                            valueType = softwareArrays[variableType][j].type || -1;
                                        }
                                        j++;
                                    }
                                } else if (variableType === 'sensors') {
                                    value = selectedValue;

                                    j = 0;
                                    while (!valueType && (j < sensorsComponentsArray.length)) {
                                        if (sensorsComponentsArray[j].name === value) {
                                            valueType = sensorsComponentsArray[j].dataReturnType;
                                        }
                                        j++;
                                    }

                                } else {
                                    value = attributeValue || selectedValue;
                                }

                                // console.log('val', attributeValue, selectedValue);
                                if (value) {
                                    tempObject = {
                                        alias: this.bloqData.content[0][i].alias,
                                        id: this.bloqData.content[0][i].id,
                                        value: value,
                                        valueType: valueType
                                    };
                                }
                                break;
                            case 'staticDropdown':
                                //value = this.$bloq.find('select[data-content-id="' + this.bloqData.content[0][i].id + '"]').val();
                                value = this.$contentContainer.find('> select[data-content-id="' + this.bloqData.content[0][i].id + '"]').val();
                                if (value) {
                                    tempObject = {
                                        alias: this.bloqData.content[0][i].alias,
                                        id: this.bloqData.content[0][i].id,
                                        value: value
                                    };
                                }
                                break;
                            case 'text':
                                //we dont catch this field
                                break;
                            case 'dotsMatrix':
                                value = this.bloqData.content[0][i].value;
                                if (value) {
                                    tempObject = {
                                        alias: this.bloqData.content[0][i].alias,
                                        id: this.bloqData.content[0][i].id,
                                        value: value
                                    };
                                }
                                break;
                            default:
                                throw 'I dont know how to get the structure from this contentType :( ' + this.bloqData.content[0][i].alias;
                        }
                        if (tempObject) {
                            if (fullStructure) {
                                result.content[0][i].value = tempObject.value;
                                result.content[0][i].valueType = tempObject.valueType;
                            } else {
                                result.content[0].push(tempObject);
                            }
                        }

                    }
                }

                return result;
            };
            window.dispatchEvent(new CustomEvent('bloqs:created', {
                detail: {
                    bloq: this
                }
            }));
            return this;
        } else {
            console.error('the bloqData its empty.');
        }
    };

    var clearSoftwareArrays = function () {
        softwareArrays = {
            voidFunctions: [],
            returnFunctions: [],
            softwareVars: [],
            classes: [],
            objects: []
        };
    };

    var buildBloqWithContent = function (data, componentsArray, schemas, $field) {

        var tempBloq,
            originalBloqSchema = _.cloneDeep(schemas[data.name]),
            bloqSchema,
            lastBottomConnector,
            tempNodeBloq,
            tempOutputBloq,
            inputConnectorUuid,
            $dropContainer,
            i;


        if (!originalBloqSchema) {
            console.error('no original schema', data);
        }
        //fill the schema with content
        bloqSchema = bloqsUtils.fillSchemaWithContent(originalBloqSchema, data);
        tempBloq = new Bloq({
            bloqData: bloqSchema,
            componentsArray: componentsArray,
            $field: $field
        });

        if (data.content) {
            for (i = 0; i < data.content[0].length; i++) {
                if (data.content[0][i].alias === 'bloqInput') {
                    inputConnectorUuid = tempBloq.getIOConnectorUuidByContentId(data.content[0][i].bloqInputId);
                    $dropContainer = tempBloq.$bloq.find('[data-connector-id="' + inputConnectorUuid + '"]').first();
                    //console.debug($dropContainer);
                    //inputConnectorUuid = $dropContainer.attr('data-connector-id');
                    //console.debug(inputConnectorUuid);
                    tempOutputBloq = buildBloqWithContent(data.content[0][i].value, componentsArray, schemas, $field);
                    tempOutputBloq.$bloq.addClass('nested-bloq');
                    //Connections in bloqInput
                    //logical
                    if (!IOConnectors[inputConnectorUuid]) {
                        console.debug('not connector?', originalBloqSchema);
                    }
                    IOConnectors[inputConnectorUuid].connectedTo = tempOutputBloq.IOConnectors[0];
                    IOConnectors[tempOutputBloq.IOConnectors[0]].connectedTo = inputConnectorUuid;
                    //visual
                    //$dropContainer[0].appendChild(tempOutputBloq.$bloq[0])
                    $dropContainer.append(tempOutputBloq.$bloq);
                }
            }
        }

        if (data.childs) {

            $dropContainer = tempBloq.$bloq.find('.bloq--extension__content');
            lastBottomConnector = tempBloq.connectors[2];

            if (data.childs.length > 0) {
                tempBloq.$bloq.addClass('with--content');
            }
            for (i = 0; i < data.childs.length; i++) {
                tempNodeBloq = buildBloqWithContent(data.childs[i], componentsArray, schemas, $field);
                //Connections in statement
                //logical
                connectors[lastBottomConnector].connectedTo = tempNodeBloq.connectors[0];
                connectors[tempNodeBloq.connectors[0]].connectedTo = lastBottomConnector;
                lastBottomConnector = tempNodeBloq.connectors[1];

                //visual
                tempNodeBloq.$bloq.addClass('inside-bloq');
                $dropContainer.append(tempNodeBloq.$bloq);
            }
        }

        if (data.enable) {
            tempBloq.enable(true);
        } else {

            tempBloq.disable();
        }
        if (tempBloq.bloqData.createDynamicContent) {
            updateSoftVar(tempBloq);
        }

        return tempBloq;
    };

    function removeAllBloqs() {
        for (var i = 0; i < mainBloqs.length; i++) {
            removeBloq(mainBloqs[i].uuid, true, true);
        }
        //prueba y descomenta
        mainBloqs = []
        //
        destroyFreeBloqs();
    }

    exports.Bloq = Bloq;
    exports.updateSoftVar = updateSoftVar;
    exports.connectors = connectors;
    exports.IOConnectors = IOConnectors;
    exports.bloqs = bloqs;
    exports.removeBloq = removeBloq;
    exports.translateBloqs = translateBloqs;
    exports.getFreeBloqs = getFreeBloqs;
    exports.destroyFreeBloqs = destroyFreeBloqs;
    exports.updateDropdowns = updateDropdowns;
    exports.setOptions = setOptions;
    exports.buildBloqWithContent = buildBloqWithContent;
    exports.clearSoftwareArrays = clearSoftwareArrays;
    exports.startBloqsUpdate = startBloqsUpdate;
    exports.removeAllBloqs = removeAllBloqs;

    return exports;

})(window.bloqs = window.bloqs || {}, _, Q, bloqsUtils, bloqsLanguages, bloqsTooltip, bloqsSuggested, bloqsDotsMatrix, undefined);
