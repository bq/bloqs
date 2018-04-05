'use strict';
(function (bloqsUtils, _) {


    var isNumeric = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    /**
     * If the param is not a number, we set it to ''
     * @param  number
     */

    var validNumber = function (number) {
        var temp = number;
        var removedChar = 0;
        var i = 0;
        if (number[0] === '-') {
            temp = number.substring(1);
            i = 1;
        }
        // var count = occurrencesInString(number, '.', false);
        var index = number.indexOf('.');
        while (i < number.length) {
            if ((number[i] === '.' && index < i) || (!isNumeric(number[i]) && number[i] !== '.')) {
                number = number.slice(0, i) + number.slice(i + 1, number.length);
                removedChar += 1;
            } else {
                i++;
            }
        }

        return {
            value: number,
            removedChar: removedChar
        };
    };

    var getCaretPosition = function (el) {
        if (el.selectionStart) {
            return el.selectionStart;
        } else if (document.selection) {
            el.focus();

            var r = document.selection.createRange();
            if (r === null) {
                return 0;
            }

            var re = el.createTextRange(),
                rc = re.duplicate();
            re.moveToBookmark(r.getBookmark());
            rc.setEndPoint('EndToStart', re);

            return rc.text.length;
        }
        return 0;
    };

    var setCaretPosition = function (ctrl, pos) {
        if (ctrl.setSelectionRange) {
            ctrl.focus();
            ctrl.setSelectionRange(pos, pos);
        } else if (ctrl.createTextRange) {
            var range = ctrl.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    /**
     * If the param has non escaped characters, escape them
     * @param  value
     */
    var validString = function (value) {
        value = value.replace(/(^|\b|[^\\])(\\\\)*\\$/g, '$&\\');
        value = value.replace(/(^|\b|[^\\])((\\\\)*\")/g, '$1\\$2');
        value = value.replace(/(^|\b|[^\\])((\\\\)*\/\*)/g, '$1\\$2');
        value = value.replace(/(^|\b|[^\\])((\\\\)*\/\/)/g, '$1\\$2');
        value = value.replace(/\$\'/g, '\$\\\'');
        value = value.replace(/\$\&/g, '\$\\\&');

        return value;
    };

    /**
     * Return the first valid char from a string
     * @param  value
     */
    var validChar = function (value) {
        value = value.replace(/\$*/g, '');
        if (/^\\/g.test(value)) {
            if (/^\\([0-7]{1,3}|x[0-9A-F]{1,2}|u[0-9A-F]{1,4})/g.test(value)) {
                value = value.match(/^\\([0-7]{1,3}|x[0-9A-F]{1,2}|u[0-9A-F]{1,4})/g)[0];
            } else if (/^\\[bfnrtv0']/g.test(value)) {
                value = value.substring(0, 2);
            } else if (/^\\[%#!|"@~&?\/()=^`[+\]*,{};.:-]/g.test(value)) {
                value = value.charAt(1);
            } else {
                value = '\\\\';
            }
        } else if (/^(\')/g.test(value)) {
            value = '\\\'';
        } else {
            value = value.charAt(0);
        }

        return value;
    };

    /**
     * If the param has a comment end, omit it
     * @param  value
     */
    var validComment = function (value) {
        value = value.replace(/\*\//g, '');
        value = value.replace(/\$\'/g, '\$\\\'');
        value = value.replace(/\$\&/g, '\$\\\&');

        return value;
    };

    /**
     * Transform a function or variable name to make it "legal" in Arduino coding language
     * @param  name
     */
    var validName = function (name, bloqUuid, softwareArrays) {
        var reservedWords = 'setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,interger, constants,floating,point,void,bool,char,unsigned,byte,int,word,long,float,double,string,String,array,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts';
        reservedWords = reservedWords.split(',');
        if (name && name.length > 0) {
            var i = 0,
                j = 0;
            while (i < name.length) {
                if (!isNaN(parseFloat(name[i]))) {
                    name = name.substring(1, name.length);
                } else {
                    break;
                }
            }
            //Remove all diacritics
            name = removeDiacritics(name);
            i = 0;
            while (i < name.length) {
                if (!isNaN(parseFloat(name[i]))) {
                    name = name.substring(1, name.length);
                } else {
                    break;
                }
            }
            for (j = 0; j < reservedWords.length; j++) {
                if (name === reservedWords[j]) {
                    name += '_';
                    break;
                }
            }
            var names = {},
                regexp = /(\D+)(\d+)$/,
                variableSufixNumber = '';

            if (softwareArrays) {
                var softwareVars = softwareArrays.softwareVars.concat(softwareArrays.voidFunctions, softwareArrays.returnFunctions);

                for (j = 0; j < softwareVars.length; j++) {
                    if (softwareVars[j].bloqUuid !== bloqUuid) {
                        names[softwareVars[j].name] = true;
                    }
                }
                var regexpResult = regexp.exec(name);
                if (regexpResult) {
                    variableSufixNumber = regexpResult[2];
                }
                var variableName = name.substring(0, name.length - variableSufixNumber.length);
                variableSufixNumber = Number(variableSufixNumber);
                while (names[name]) {
                    variableSufixNumber++;
                    name = variableName + variableSufixNumber
                }
            }
        }
        return name;
    };

    var appendArrayInOneTime = function ($container, $items) {
        var rawArray = $.map(
            $items,
            function (value) {

                // Return the unwrapped version. This will return
                // the underlying DOM nodes contained within each
                // jQuery value.
                return (value.get());

            }
        );

        // Add the raw DOM array to the current collection.
        $container.append(rawArray);
    };

    var generateUUID = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    var getNumericStyleProperty = function (style, prop) {
        return parseInt(style.getPropertyValue(prop), 10);
    };

    var drawDropdownOptions = function ($element, arrayOptions) {
        var $tempElement, i,
            $items = [];

        $element.html('');
        for (i = 0; i < arrayOptions.length; i++) {
            $tempElement = $('<option>').attr({
                'data-var-id': arrayOptions[i].id,
                value: arrayOptions[i].name,
                'data-reference': arrayOptions[i].uid
            }).html(arrayOptions[i].name);
            $items.push($tempElement);
        }
        appendArrayInOneTime($element, $items);
    };

    var itsOver = function (dragConnector, dropConnector, margin) {
        margin = margin || 0;
        var dragConnectorOffset = dragConnector.offset(),
            dropConnectorOffset = dropConnector.offset();
        return dragConnectorOffset.left < (dropConnectorOffset.left + dropConnector[0].clientWidth + margin) && (dragConnectorOffset.left + dragConnector[0].clientWidth) > (dropConnectorOffset.left - margin) && dragConnectorOffset.top < (dropConnectorOffset.top + dropConnector[0].clientHeight + margin) && (dragConnectorOffset.top + dragConnector[0].clientHeight) > (dropConnectorOffset.top - margin);
    };

    var sameConnectionType = function (dragBloq, dropBloq, dropConnectorAcceptType, bloqs, IOConnectors, softwareArrays, componentsArray) {
        var dragConnectorType = getTypeFromBloq(dragBloq, bloqs, IOConnectors, softwareArrays, componentsArray);
        //if acceptType its and object, the acceptType comes from a dinamic dropdown.
        if (Object.prototype.toString.call(dropConnectorAcceptType) === '[object Object]') {
            dropConnectorAcceptType = getTypeFromDynamicDropdown(dropBloq, dropConnectorAcceptType, softwareArrays);
        }
        //we assume that float = int its a valid connection because c do a internal cast
        return (dragConnectorType === 'all') || (dropConnectorAcceptType.indexOf('all') !== -1) || (dropConnectorAcceptType.indexOf(dragConnectorType) !== -1) || ((dragConnectorType === 'float') && (dropConnectorAcceptType.indexOf('int') !== -1)) || ((dragConnectorType === 'int') && (dropConnectorAcceptType.indexOf('float') !== -1));
    };
    //getConnectorsUuidByAcceptType
    var getTypeFromDynamicDropdown = function (bloq, typeObject, softwareArrays) {
        var attributeValue = bloq.$bloq.find('select[data-content-id="' + typeObject.idDropdown + '"][data-dropdowncontent="' + typeObject.options + '"]').attr('data-value');
        var selectedValue = bloq.$bloq.find('select[data-content-id="' + typeObject.idDropdown + '"][data-dropdowncontent="' + typeObject.options + '"]').val();
        var selectedVarNameOnDropdown = attributeValue || selectedValue;

        if (!selectedVarNameOnDropdown) {
            //rare bug, maybe the timeout, cant get the value of a options create disabled and enabled later
            //selectedVarNameOnDropdown = bloq.$bloq.find('select[data-content-id="' + typeObject.idDropdown + '"][data-dropdowncontent="' + typeObject.options + '"] option:first-child').val();
            ////or maybe a empty set var bloq :D
            //throw 'check this!';
        }

        var varData = _.find(softwareArrays[typeObject.options], {
            name: selectedVarNameOnDropdown
        });
        if (varData) {
            if (typeObject.pointer) {
                varData.type = varData.type.replace(' *', '');
            }
            return varData.type;
        }
        return '';

    };
    var getFromDynamicDropdownType = function (bloq, idDropdown, options, softwareArrays, componentsArray) {
        var attributeValue = bloq.$bloq.find('select[data-content-id="' + idDropdown + '"][data-dropdowncontent="' + options + '"]').attr('data-value');
        var selectedValue = bloq.$bloq.find('select[data-content-id="' + idDropdown + '"][data-dropdowncontent="' + options + '"]').val();
        var varName = attributeValue || selectedValue;

        var softVar = _.find(softwareArrays[options], {
            name: varName
        });
        if (!softVar) {
            for (var j in componentsArray.sensors) {
                if (componentsArray.sensors[j].name === varName) {
                    if (componentsArray.sensors[j].type === 'Joystick' || componentsArray.sensors[j].type === 'LineFollower') {
                        return 'float *';
                    } else if (componentsArray.sensors[j].type === 'ButtonPad') {
                        return 'char';
                    } else {
                        return 'float';
                    }
                }
            }
        }
        if (softVar) {
            if (bloq.bloqData && bloq.bloqData.returnType && bloq.bloqData.returnType.pointer) {
                softVar.type = softVar.type.replace(' *', '');
            }
            return softVar.type;
        }
        return '';
    };

    /**
     * Get the extreme of the tree, the root or the leaf
     * @param  bloqUuid
     * @param  connectors
     * @param  bloqs
     * @param  connectorPosition 0: tipical position of the top-connector, 1: bottom-connector
     * @return
     */
    var getTreeExtreme = function (bloqUuid, bloqs, connectors, connectorPosition) {
        if (connectors[bloqs[bloqUuid].connectors[connectorPosition]].connectedTo) {
            return getTreeExtreme(connectors[connectors[bloqs[bloqUuid].connectors[connectorPosition]].connectedTo].bloqUuid, bloqs, connectors, connectorPosition);
        } else {
            return bloqs[bloqUuid].connectors[connectorPosition];
        }
    };
    /**
     * From a bloq, this function get the bottom Connector of the branch.
     * @param  {[type]} bloqUuid   [description]
     * @param  {[type]} connectors [description]
     * @param  {[type]} bloqs      [description]
     * @return {[type]}            [description]
     */
    var getLastBottomConnectorUuid = function (bloqUuid, bloqs, connectors) {
        return getTreeExtreme(bloqUuid, bloqs, connectors, 1);
    };
    /**
     * From a bloq, this function get the top Connector of the branch.
     * @param  {[type]} bloqUuid   [description]
     * @param  {[type]} connectors [description]
     * @param  {[type]} bloqs      [description]
     * @return {[type]}            [description]
     */
    var getFirstTopConnectorUuid = function (bloqUuid, bloqs, connectors) {
        return getTreeExtreme(bloqUuid, bloqs, connectors, 0);
    };
    /**
     * Get the output connector from a output bloq
     * @param  bloq
     * @param  IOConnectors
     * @return              the connector
     */
    var getOutputConnector = function (bloq, IOConnectors) {
        var i = 0,
            outputConnector = null;
        while (!outputConnector && (i < bloq.IOConnectors.length)) {
            if (IOConnectors[bloq.IOConnectors[i]].data.type === 'connector--output') {
                outputConnector = IOConnectors[bloq.IOConnectors[i]];
            }
            i++;
        }
        if (!outputConnector) {
            throw 'outputBloq has no connector-output';
        } else {
            return outputConnector;
        }
    };
    /**
     * Receive a bloq, and if is top go to the bottom connector until the end, and gice the size
     * @param  {[type]} bloqUuid   [description]
     * @param  {[type]} bloqIsTop  [description]
     * @param  {[type]} bloqs      [description]
     * @param  {[type]} connectors [description]
     * @return {[type]}            [description]
     */
    var getNodesHeight = function (bloqUuid, bloqIsTop, bloqs, connectors) {
        var bloq = bloqs[bloqUuid];
        var connectorPosition;
        if (bloqIsTop) {
            connectorPosition = 1;
        } else {
            connectorPosition = 0;
        }
        if (connectors[bloq.connectors[connectorPosition]].connectedTo) {
            return bloq.$bloq.outerHeight(true) + getNodesHeight(connectors[connectors[bloq.connectors[connectorPosition]].connectedTo].bloqUuid, bloqIsTop, bloqs, connectors);
        } else {
            return bloq.$bloq.outerHeight(true);
        }
    };
    /**
     * You can give any node of the tree, and return the size in px
     * @param  {[type]} bloqUuid   [description]
     * @param  {[type]} bloqs      [description]
     * @param  {[type]} connectors [description]
     * @return {[type]}            [description]
     */
    var getTreeHeight = function (bloqUuid, bloqs, connectors) {
        var bloq = bloqs[bloqUuid];
        var topConnectorUuid = connectors[bloq.connectors[0]].connectedTo,
            bottomConnectorUuid = connectors[bloq.connectors[1]].connectedTo;
        var height = bloq.$bloq.outerHeight(true);
        if (topConnectorUuid) {
            height += getNodesHeight(connectors[topConnectorUuid].bloqUuid, false, bloqs, connectors);
        }
        if (bottomConnectorUuid) {
            height += getNodesHeight(connectors[bottomConnectorUuid].bloqUuid, true, bloqs, connectors);
        }
        return height;
    };
    /**
     * draw in console a branch
     * @param  {[type]} bloqs            [description]
     * @param  {[type]} connectors       [description]
     * @param  {[type]} topConnectorUuid [description]
     * @return {[type]}                  [description]
     */
    var drawBranch = function (bloqs, connectors, topConnectorUuid) {
        var branchUuid = connectors[topConnectorUuid].bloqUuid;
        console.log('          ******* - branch - *********', branchUuid);
        console.log('          ', bloqs[branchUuid].bloqData.name);
        console.log('          connector--top:', bloqs[branchUuid].connectors[0], 'connectedTo', connectors[bloqs[branchUuid].connectors[0]].connectedTo);
        console.log('          connector--bottom:', bloqs[branchUuid].connectors[1], 'connectedTo', connectors[bloqs[branchUuid].connectors[1]].connectedTo);
        if (bloqs[branchUuid].connectors[2]) {
            console.log('       connector--root:', bloqs[branchUuid].connectors[2], 'connectedTo', connectors[bloqs[branchUuid].connectors[2]].connectedTo);
            console.log('                       ******* -  content **********');
            if (connectors[bloqs[branchUuid].connectors[2]].connectedTo) {
                drawBranch(bloqs, connectors, connectors[bloqs[branchUuid].connectors[2]].connectedTo);
            }
            console.log('                       ******* - end content **********');
        }
        if (connectors[bloqs[branchUuid].connectors[1]].connectedTo) {
            drawBranch(bloqs, connectors, connectors[bloqs[branchUuid].connectors[1]].connectedTo);
        }
    };
    /**
     * Draw in console the tree
     * @param  {[type]} bloqs      [description]
     * @param  {[type]} connectors [description]
     * @return {[type]}            [description]
     */
    var drawTree = function (bloqs, connectors) {
        console.log(bloqs);
        //buscamos los tipo statement q no tienen un top conectado
        for (var uuid in bloqs) {
            //console.log(bloqs[uuid]);
            if (bloqs[uuid].connectors[0] && !connectors[bloqs[uuid].connectors[0]].connectedTo) {
                switch (bloqs[uuid].bloqData.type) {
                    case 'statement':
                    case 'statement-input':
                        console.log('******* - tree - *********', uuid);
                        console.log(bloqs[uuid].bloqData.name);
                        console.log('connector--top:', bloqs[uuid].connectors[0], 'connectedTo', connectors[bloqs[uuid].connectors[0]].connectedTo);
                        console.log('connector--bottom:', bloqs[uuid].connectors[1], 'connectedTo', connectors[bloqs[uuid].connectors[1]].connectedTo);
                        if (bloqs[uuid].connectors[2]) {
                            console.log('connector--root:', bloqs[uuid].connectors[2], 'connectedTo', connectors[bloqs[uuid].connectors[2]].connectedTo);
                            console.log('           ccccccc -  content ccccccc');
                            if (connectors[bloqs[uuid].connectors[2]].connectedTo) {
                                drawBranch(bloqs, connectors, connectors[bloqs[uuid].connectors[2]].connectedTo);
                            }
                            console.log('           ccccccc - end content ccccccc');
                        }
                        if (connectors[bloqs[uuid].connectors[1]].connectedTo) {
                            drawBranch(bloqs, connectors, connectors[bloqs[uuid].connectors[1]].connectedTo);
                        }
                        break;
                    case 'group':
                        console.log('******* - Group - *********', uuid);
                        console.log(bloqs[uuid].bloqData.name);
                        console.log('connector--root:', bloqs[uuid].connectors[2], 'connectedTo', connectors[bloqs[uuid].connectors[2]].connectedTo);
                        console.log('           ccccccc -  content ccccccc');
                        if (connectors[bloqs[uuid].connectors[2]].connectedTo) {
                            drawBranch(bloqs, connectors, connectors[bloqs[uuid].connectors[2]].connectedTo);
                        }
                        console.log('           ccccccc - end content ccccccc');
                        break;
                }
            }
        }
    };
    /**
     * get all the connectors of a branch
     * @param  {[type]} bloqUuid   [description]
     * @param  {[type]} connectors [description]
     * @param  {[type]} bloqs      [description]
     * @return {[type]}            [description]
     */
    var getBranchsConnectors = function (bloqUuid, bloqs, connectors) {
        var bloq = bloqs[bloqUuid];
        var result = [];
        result = result.concat(bloq.connectors);
        //console.log('tiene un hijo', connectors[bloq.connectors[1]].connectedTo);
        if (connectors[bloq.connectors[1]].connectedTo) {
            var bloqBranchUuid = connectors[connectors[bloq.connectors[1]].connectedTo].bloqUuid;
            result = result.concat(getBranchsConnectors(bloqBranchUuid, connectors, bloqs));
        }
        //si tiene hijos
        if (bloq.connectors[2] && connectors[bloq.connectors[2]].connectedTo) {
            var bloqChildUuid = connectors[connectors[bloq.connectors[2]].connectedTo].bloqUuid;
            result = result.concat(getBranchsConnectors(bloqChildUuid, connectors, bloqs));
        }
        return result;
    };
    var getBranchsConnectorsNoChildren = function (bloqUuid, connectors, bloqs) {
        var bloq = bloqs[bloqUuid];
        var result = [];
        result = result.concat(bloq.connectors);
        //console.log('tiene un hijo', connectors[bloq.connectors[1]].connectedTo);
        if (connectors[bloq.connectors[1]].connectedTo) {
            var bloqBranchUuid = connectors[connectors[bloq.connectors[1]].connectedTo].bloqUuid;
            result = result.concat(getBranchsConnectorsNoChildren(bloqBranchUuid, connectors, bloqs));
        }
        return result;
    };

    var getConnectorsUuidByAcceptType = function (IOConnectors, type) {
        var result = [];
        for (var key in IOConnectors) {
            if (IOConnectors[key].data.acceptType.indexOf('type') !== -1) {
                result.push(IOConnectors[key].uuid);
            }
        }
        return result;
    };
    var getNotConnected = function (IOConnectors, uuids) {
        var result = [];
        for (var i = 0; i < uuids.length; i++) {
            if (!IOConnectors[uuids[i]].connectedTo) {
                result.push(uuids[i]);
            }
        }
        return result;
    };
    var getInputsConnectorsFromBloq = function (IOConnectors, bloqs, bloq) {
        var result = [];
        var uuid;
        // connectedBloq;
        for (var i = 0; i < bloq.IOConnectors.length; i++) {
            uuid = bloq.IOConnectors[i];
            if (IOConnectors[bloq.IOConnectors[i]] && IOConnectors[uuid].data.type === 'connector--input') {
                result.push(uuid);
            }
        }
        return result;
    };

    var removeInputsConnectorsFromBloq = function (IOConnectors, bloq) {
        //remove visually all bloqInputs
        bloq.$contentContainer.children('.bloqinput').remove();
        bloq.$contentContainer.children('.removabletext').remove();
        //remove all IOConnectors
        for (var i = 0; i < bloq.IOConnectors.length; i++) {
            if (IOConnectors[bloq.IOConnectors[i]].data.type === 'connector--input') {
                delete IOConnectors[bloq.IOConnectors[i]];
            }
        }
    };
    var generateBloqInputConnectors = function (bloq) {
        var uuid;
        for (var i = 0; i < bloq.content.length; i++) {
            for (var j = 0; j < bloq.content[i].length; j++) {
                if (bloq.content[i][j].alias === 'bloqInput') {
                    uuid = generateUUID();
                    bloq.content[i][j].name = uuid;
                    bloq.connectors.push({
                        type: 'connector--input',
                        accept: 'connector--output',
                        name: uuid
                    });
                }
            }
        }
    };
    var getBloqByConnectorUuid = function (connectorUuid, bloqs, connectors) {
        return bloqs[connectors[connectorUuid].bloqUuid];
    };

    var translateRegExp = /translate\(((-)*(\d|\.)*)px, ((-)*(\d|\.)*)px\)/;
    var redrawTree = function (bloq, bloqs, connectors) {
        var rootBloq = getBloqByConnectorUuid(getFirstTopConnectorUuid(bloq.uuid, bloqs, connectors), bloqs, connectors);

        var somethingConnectedInBottomUuid = connectors[rootBloq.connectors[1]].connectedTo,
            transformProperties = translateRegExp.exec(rootBloq.$bloq[0].style.transform),
            top,
            left,
            branchBloq;

        if (transformProperties) {
            top = parseInt(transformProperties[4]);
            left = transformProperties[1];
        } else {
            top = parseInt(rootBloq.$bloq[0].style.top) || rootBloq.$bloq.position().top;
            left = parseInt(rootBloq.$bloq[0].style.left) || rootBloq.$bloq.position().left;
        }
        top += rootBloq.$bloq.outerHeight(true);

        while (somethingConnectedInBottomUuid) {
            branchBloq = bloqs[connectors[somethingConnectedInBottomUuid].bloqUuid];
            branchBloq.$bloq[0].style.transform = 'translate(' + left + 'px,' + top + 'px)';
            top += branchBloq.$bloq.outerHeight(true);
            somethingConnectedInBottomUuid = connectors[branchBloq.connectors[1]].connectedTo;
        }

    };

    var itsARootConnector = function (connector) {
        return connector.data.type === 'connector--root';
    };

    var itsInsideAConnectorRoot = function (bloq, bloqs, connectors) {

        var topConnector = connectors[bloq.connectors[0]];
        if (connectors[topConnector.connectedTo]) {
            var connectedWithTopConnector = connectors[topConnector.connectedTo];
            return itsARootConnector(connectedWithTopConnector) || itsInsideAConnectorRoot(getBloqByConnectorUuid(connectedWithTopConnector.uuid, bloqs, connectors), bloqs, connectors);

        } else {
            return false;
        }
    };

    var getClassName = function (bloq, bloqs, connectors) {
        var topConnector = connectors[bloq.connectors[0]];
        if (connectors[topConnector.connectedTo]) {
            var connectedWithTopConnector = connectors[topConnector.connectedTo];
            var bloqConnected = getBloqByConnectorUuid(connectedWithTopConnector.uuid, bloqs, connectors);
            if (itsARootConnector(connectedWithTopConnector) && (bloqConnected.bloqData.name === 'classChildren' || bloqConnected.bloqData.name === 'class')) {
                return bloqConnected.$bloq.find('[data-content-id="NAME"]').val();
            } else {
                return getClassName(getBloqByConnectorUuid(connectedWithTopConnector.uuid, bloqs, connectors), bloqs, connectors);
            }
        } else {
            return undefined;
        }
    };

    var jqueryObjectsArrayToHtmlToInsert = function (arrayToTransform) {
        var rawArray = $.map(
            arrayToTransform,
            function (value) {

                // Return the unwrapped version. This will return
                // the underlying DOM nodes contained within each
                // jQuery value.
                return (value.get());

            }
        );
        return rawArray;
    };

    var connectorIsInBranch = function (connectorUuid, topBloqUuid, bloqs, connectors) {
        var isInBloq = false;
        var i = 0;
        //miro si es uno de mis conectores
        while (!isInBloq && (i < bloqs[topBloqUuid].connectors.length)) {
            if (bloqs[topBloqUuid].connectors[i] === connectorUuid) {
                isInBloq = true;
            } else {
                i++;
            }
        }
        i = 0;
        while (!isInBloq && (i < bloqs[topBloqUuid].IOConnectors.length)) {
            if (bloqs[topBloqUuid].IOConnectors[i] === connectorUuid) {
                isInBloq = true;
            } else {
                i++;
            }
        }
        //si tengo hijos miro en ellos
        if (!isInBloq && bloqs[topBloqUuid].connectors[2] && connectors[bloqs[topBloqUuid].connectors[2]].connectedTo) {
            isInBloq = connectorIsInBranch(connectorUuid, connectors[connectors[bloqs[topBloqUuid].connectors[2]].connectedTo].bloqUuid, bloqs, connectors);
        }
        //si tengo enganchado algo abajo miro en ellos
        if (!isInBloq && bloqs[topBloqUuid].connectors[1] && connectors[bloqs[topBloqUuid].connectors[1]].connectedTo) {
            isInBloq = connectorIsInBranch(connectorUuid, connectors[connectors[bloqs[topBloqUuid].connectors[1]].connectedTo].bloqUuid, bloqs, connectors);
        }
        return isInBloq;
    };

    var hasClass = function (el, selector) {
        var className = ' ' + selector + ' ';

        if ((' ' + el.className + ' ').replace(/[\n\t]/g, ' ').indexOf(className) > -1) {
            return true;
        }

        return false;
    };

    var getTypeFromBloq = function (bloq, bloqs, IOConnectors, softwareArrays, componentsArray) {
        var result;
        if (!bloq) {
            console.error('We cant get the type if we dont have a bloq');
        }
        if (!bloq.bloqData.returnType) {
            console.error('we cant get the type from a bloq without returnType ' + bloq.bloqData.name);
        }
        switch (bloq.bloqData.returnType.type) {
            case 'simple':
                result = bloq.bloqData.returnType.value;
                break;
            case 'fromInput':
                var contentData = _.find(bloq.bloqData.content[0], {
                    bloqInputId: bloq.bloqData.returnType.bloqInputId
                });
                var connector = _.find(IOConnectors, {
                    bloqUuid: bloq.uuid,
                    data: {
                        name: contentData.name
                    }
                });
                if (connector && connector.connectedTo) {
                    result = getTypeFromBloq(getBloqByConnectorUuid(connector.connectedTo, bloqs, IOConnectors), bloqs, IOConnectors, softwareArrays, componentsArray);
                } else {
                    result = '';
                }
                break;
            case 'fromDynamicDropdown':
                result = getFromDynamicDropdownType(bloq, bloq.bloqData.returnType.idDropdown, bloq.bloqData.returnType.options, softwareArrays, componentsArray);
                break;
            case 'fromDropdown':
                result = bloq.$bloq.find('[data-content-id="' + bloq.bloqData.returnType.idDropdown + '"]').val();
                break;
            case 'fromStaticDropdownProperty':
                result = getTypeFromStaticDropdownProperty(bloq);
                break;
            default:
                throw 'we cant get the type from this bloq: ' + bloq.bloqData.name + ' ' + JSON.stringify(bloq.bloqData.returnType);
        }
        return result;
    };

    var getTypeFromStaticDropdownProperty = function (bloq) {
        var type = '';
        var selectedValue = bloq.$bloq.find('[data-content-id="' + bloq.bloqData.returnType.idDropdown + '"]').val();
        if (selectedValue) {
            var dropdownData = _.find(bloq.bloqData.content[0], {
                id: bloq.bloqData.returnType.idDropdown
            });
            var optionData = _.find(dropdownData.options, {
                value: selectedValue
            });
            if (optionData.type) {
                type = optionData.type;
            }

        }
        return type;

    };

    var occurrencesInString = function (string, subString, allowOverlapping) {
        string += '';
        subString += '';
        if (subString.length <= 0) {
            return string.length + 1;
        }

        var n = 0,
            pos = 0;
        var step = (allowOverlapping) ? (1) : (subString.length);

        while (true) {
            pos = string.indexOf(subString, pos);
            if (pos >= 0) {
                n++;
                pos += step;
            } else {
                break;
            }
        }
        return (n);
    };

    var getParent = function (bloq, bloqs, IOConnectors) {
        var connector = getOutputConnector(bloq, IOConnectors);
        return getBloqByConnectorUuid(connector.connectedTo, bloqs, IOConnectors);

    };

    var drawSoftwareVars = function (softwareArrays) {
        for (var i = 0; i < softwareArrays.softwareVars.length; i++) {
            console.log('name: ', softwareArrays.softwareVars[i].name, 'type: ', softwareArrays.softwareVars[i].type);
        }
    };

    var drawSoftwareArray = function (softwareArrays) {
        console.info('drawSoftwareArray');
        drawSoftwareVars(softwareArrays);
        console.info('returnFunctions');
        for (var i = 0; i < softwareArrays.returnFunctions.length; i++) {
            console.log('name: ', softwareArrays.returnFunctions[i].name, 'type: ', softwareArrays.returnFunctions[i].type);
        }
    };

    var fillSchemaWithContent = function (originalBloqSchema, data) {
        var bloqSchema = _.clone(originalBloqSchema, true),
            k,
            found;

        if (data && data.content) {
            for (var i = 0; i < data.content[0].length; i++) {

                switch (data.content[0][i].alias) {
                    case 'varInput':
                    case 'numberInput':
                    case 'stringInput':
                    case 'charInput':
                    case 'dynamicDropdown':
                    case 'staticDropdown':
                    case 'multilineCodeInput':
                    case 'multilineCommentInput':
                    case 'dotsMatrix':
                        k = 0;
                        found = false;
                        while (!found && (k < bloqSchema.content[0].length)) {
                            if (data.content[0][i].id === bloqSchema.content[0][k].id) {
                                found = true;
                                bloqSchema.content[0][k].value = data.content[0][i].value;
                            }
                            k++;
                        }
                        if (!found) {
                            throw 'Attribute on bloqStructure not found in definition';
                        }
                        break;
                    case 'bloqInput':
                        //we do nothing here
                        break;
                    default:
                        throw 'we cant build that option ' + data.content[0][i].alias;
                }
            }
        }

        return bloqSchema;
    };

    var checkPins = function (component) {

        if (component.pins) {
            for (var pinType in component.pins) {
                component.pins[pinType].forEach(function (pin) {
                    component.pin[pin] = component.pin[pin] || ''
                });
            }
        }

        return component;
    };

    var splice = function (string, idx, rem, s) {

        return (string.slice(0, idx) + s + string.slice(idx + Math.abs(rem)));
    };

    var executeFunctionOnConnectedStatementBloqs = function (functionToExecute, bloq, bloqs, connectors) {
        var connector = connectors[bloq.connectors[1]].connectedTo,
            tempBloq;

        while (connector) {
            tempBloq = getBloqByConnectorUuid(connector, bloqs, connectors);
            tempBloq[functionToExecute]();
            connector = connectors[tempBloq.connectors[1]].connectedTo;
        }
    };

    var timers = [];
    var delay = (function () {
        return function (callback, ms, elementId) {
            if (timers[elementId]) {
                clearTimeout(timers[elementId]);
            }
            timers[elementId] = setTimeout(callback, ms);
        };
    })();

    var defaultDiacriticsRemovalap = [{
        'base': 'A',
        'letters': 'AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ'
    }, {
        'base': 'AA',
        'letters': 'Ꜳ'
    }, {
        'base': 'AE',
        'letters': 'ÆǼǢ'
    }, {
        'base': 'AO',
        'letters': 'Ꜵ'
    }, {
        'base': 'AU',
        'letters': 'Ꜷ'
    }, {
        'base': 'AV',
        'letters': 'ꜸꜺ'
    }, {
        'base': 'AY',
        'letters': 'Ꜽ'
    }, {
        'base': 'B',
        'letters': 'BⒷＢḂḄḆɃƂƁ'
    }, {
        'base': 'C',
        'letters': 'CⒸＣĆĈĊČÇḈƇȻꜾ'
    }, {
        'base': 'D',
        'letters': 'DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ'
    }, {
        'base': 'DZ',
        'letters': 'ǱǄ'
    }, {
        'base': 'Dz',
        'letters': 'ǲǅ'
    }, {
        'base': 'E',
        'letters': 'EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ'
    }, {
        'base': 'F',
        'letters': 'FⒻＦḞƑꝻ'
    }, {
        'base': 'G',
        'letters': 'GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ'
    }, {
        'base': 'H',
        'letters': 'HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ'
    }, {
        'base': 'I',
        'letters': 'IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ'
    }, {
        'base': 'J',
        'letters': 'JⒿＪĴɈ'
    }, {
        'base': 'K',
        'letters': 'KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ'
    }, {
        'base': 'L',
        'letters': 'LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ'
    }, {
        'base': 'LJ',
        'letters': 'Ǉ'
    }, {
        'base': 'Lj',
        'letters': 'ǈ'
    }, {
        'base': 'M',
        'letters': 'MⓂＭḾṀṂⱮƜ'
    }, {
        'base': 'N',
        'letters': 'NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ'
    }, {
        'base': 'NJ',
        'letters': 'Ǌ'
    }, {
        'base': 'Nj',
        'letters': 'ǋ'
    }, {
        'base': 'O',
        'letters': 'OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ'
    }, {
        'base': 'OI',
        'letters': 'Ƣ'
    }, {
        'base': 'OO',
        'letters': 'Ꝏ'
    }, {
        'base': 'OU',
        'letters': 'Ȣ'
    }, {
        'base': 'OE',
        'letters': 'Œ'
    }, {
        'base': 'oe',
        'letters': 'œ'
    }, {
        'base': 'P',
        'letters': 'PⓅＰṔṖƤⱣꝐꝒꝔ'
    }, {
        'base': 'Q',
        'letters': 'QⓆＱꝖꝘɊ'
    }, {
        'base': 'R',
        'letters': 'RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ'
    }, {
        'base': 'S',
        'letters': 'SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ'
    }, {
        'base': 'T',
        'letters': 'TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ'
    }, {
        'base': 'TZ',
        'letters': 'Ꜩ'
    }, {
        'base': 'U',
        'letters': 'UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ'
    }, {
        'base': 'V',
        'letters': 'VⓋＶṼṾƲꝞɅ'
    }, {
        'base': 'VY',
        'letters': 'Ꝡ'
    }, {
        'base': 'W',
        'letters': 'WⓌＷẀẂŴẆẄẈⱲ'
    }, {
        'base': 'X',
        'letters': 'XⓍＸẊẌ'
    }, {
        'base': 'Y',
        'letters': 'YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ'
    }, {
        'base': 'Z',
        'letters': 'ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ'
    }, {
        'base': 'a',
        'letters': 'aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ'
    }, {
        'base': 'aa',
        'letters': 'ꜳ'
    }, {
        'base': 'ae',
        'letters': 'æǽǣ'
    }, {
        'base': 'ao',
        'letters': 'ꜵ'
    }, {
        'base': 'au',
        'letters': 'ꜷ'
    }, {
        'base': 'av',
        'letters': 'ꜹꜻ'
    }, {
        'base': 'ay',
        'letters': 'ꜽ'
    }, {
        'base': 'b',
        'letters': 'bⓑｂḃḅḇƀƃɓ'
    }, {
        'base': 'c',
        'letters': 'cⓒｃćĉċčçḉƈȼꜿↄ'
    }, {
        'base': 'd',
        'letters': 'dⓓｄḋďḍḑḓḏđƌɖɗꝺ'
    }, {
        'base': 'dz',
        'letters': 'ǳǆ'
    }, {
        'base': 'e',
        'letters': 'eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ'
    }, {
        'base': 'f',
        'letters': 'fⓕｆḟƒꝼ'
    }, {
        'base': 'g',
        'letters': 'gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ'
    }, {
        'base': 'h',
        'letters': 'hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ'
    }, {
        'base': 'hv',
        'letters': 'ƕ'
    }, {
        'base': 'i',
        'letters': 'iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı'
    }, {
        'base': 'j',
        'letters': 'jⓙｊĵǰɉ'
    }, {
        'base': 'k',
        'letters': 'kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ'
    }, {
        'base': 'l',
        'letters': 'lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ'
    }, {
        'base': 'lj',
        'letters': 'ǉ'
    }, {
        'base': 'm',
        'letters': 'mⓜｍḿṁṃɱɯ'
    }, {
        'base': 'n',
        'letters': 'nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ'
    }, {
        'base': 'nj',
        'letters': 'ǌ'
    }, {
        'base': 'o',
        'letters': 'oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ'
    }, {
        'base': 'oi',
        'letters': 'ƣ'
    }, {
        'base': 'ou',
        'letters': 'ȣ'
    }, {
        'base': 'oo',
        'letters': 'ꝏ'
    }, {
        'base': 'p',
        'letters': 'pⓟｐṕṗƥᵽꝑꝓꝕ'
    }, {
        'base': 'q',
        'letters': 'qⓠｑɋꝗꝙ'
    }, {
        'base': 'r',
        'letters': 'rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ'
    }, {
        'base': 's',
        'letters': 'sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ'
    }, {
        'base': 't',
        'letters': 'tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ'
    }, {
        'base': 'tz',
        'letters': 'ꜩ'
    }, {
        'base': 'u',
        'letters': 'uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ'
    }, {
        'base': 'v',
        'letters': 'vⓥｖṽṿʋꝟʌ'
    }, {
        'base': 'vy',
        'letters': 'ꝡ'
    }, {
        'base': 'w',
        'letters': 'wⓦｗẁẃŵẇẅẘẉⱳ'
    }, {
        'base': 'x',
        'letters': 'xⓧｘẋẍ'
    }, {
        'base': 'y',
        'letters': 'yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ'
    }, {
        'base': 'z',
        'letters': 'zⓩｚźẑżžẓẕƶȥɀⱬꝣ'
    }];

    var diacriticsMap = {};
    for (var i = 0; i < defaultDiacriticsRemovalap.length; i++) {
        var letters = defaultDiacriticsRemovalap[i].letters;
        for (var j = 0; j < letters.length; j++) {
            diacriticsMap[letters[j]] = defaultDiacriticsRemovalap[i].base;
        }
    }

    var removeDiacritics = function (str) {
        return str.replace(/[^\u0000-\u007E]/g, function (a) {
            return diacriticsMap[a] || a;
        }).replace(/[^\w\s]/gi, '').replace(/ /g, '_');
    };

    var getEmptyComponentsArray = function () {
        return {
            leds: [],
            rgbs: [],
            sensors: [],
            buzzers: [],
            servos: [],
            continuousServos: [],
            oscillators: [],
            lcds: [],
            serialElements: [],
            clocks: [],
            hts221: [],
            barometer: [],
            robot: [],
            joystick: [],
            mkb_ultrasound: [],
            mkb_integrated_buzz: [],
            mkb_lightsensor: [],
            mkb_linefollower: [],
            mkb_integrated_RGB: [],
            mkb_soundsensor: [],
            mkb_4buttonKeyPad: [],
            mkb_motionSensor: [],
            mkb_fan: [],
            mkb_compass: [],
            mkb_RGBLed: [],
            ledMatrix: [],
            display7seg: [],
            remoteControl: [],
            freakscar_integrated_remote: [],
            freakscar_integrated_lightsensor: [],
            freakscar_integrated_sp: [],
            drivegearmotor: [],
            zumjuniorDoubleLeds: [],
            zumjuniorSliders: [],
            zumjuniorButtons: [],
            zumjuniorServos: [],
            zumjunior7segments: [],
            zumjuniorSensors: [],
            zumjuniorMiniservos: [],
            zumjuniorIntegratedLeds: [],
            zumjuniorIntegratedBuzzers: []
        };
    };

    var getArduinoCode = function (componentsArray, program) {
        var varCode = getArduinoCodeFromBloq(program.vars),
            setupCode = getArduinoCodeFromBloq(program.setup),
            loopCode = getArduinoCodeFromBloq(program.loop);
        return varCode + setupCode + loopCode;
    };

    var getArduinoCodeFromBloq = function (bloq) {
        var code = '';
        if (bloq.enable) {
            var contentRegExp = new RegExp('{([A-Z0-9]+)}', 'g'),
                contentConnectionTypeRegExp = new RegExp('{([A-Z0-9]+\.connectionType)}', 'g'),
                regExpResult,
                contents = [];
            code = bloq.code;
            while (regExpResult = contentRegExp.exec(code)) {
                //console.log(regExpResult);
                contents.push(getContentFromBloq(regExpResult[1], bloq));
            }
            //twice bucle because regexp are not working fine
            for (var i = 0; i < contents.length; i++) {
                console.log('+++');
                console.log(contents[i].value);
                console.log((contents[i].value || '').replace(/ \*/g, ''));
                code = code.replace(new RegExp('{' + contents[i].id + '\.withoutAsterisk}', 'g'), (contents[i].value || '').replace(/ \*/g, ''));
                code = code.replace(new RegExp('{' + contents[i].id + '\.connectionType}', 'g'), contents[i].connectionType || '');
                code = code.replace(new RegExp('{' + contents[i].id + '}( )*', 'g'), contents[i].value || '');
            };

            //search for regular expressions:
            var reg = /(.*)\?(.*):(.*)/g;
            if (reg.test(code)) {
                code = eval(code); // jshint ignore:line
            }
            console.log(code);
        }
        return code;
    };

    var getContentFromBloq = function (contentId, bloq) {
        var content = {
            value: ''
        };

        if (contentId === 'STATEMENTS') {
            content.id = 'STATEMENTS';
            for (var i = 0; i < bloq.childs.length; i++) {
                content.value += getArduinoCodeFromBloq(bloq.childs[i]);
            }
        } else {
            content = _.filter(bloq.content[0], function (elem) {
                if (elem.id === contentId) {
                    return true;
                } else if (elem.bloqInputId === contentId) {
                    elem.id = contentId;
                    return true;
                }
            })[0];
        }
        if (content.alias === 'bloqInput' && content.value) {
            content.connectionType = getTypeFromBloqStructure(content.value);
            content.value = getArduinoCodeFromBloq(content.value);
        }
        return content;
    };

    var getTypeFromBloqStructure = function (bloq) {
        var type = '',
            content = null;
        if (bloq.returnType) {
            switch (bloq.returnType.type) {
                case 'simple':
                    type = bloq.returnType.value;
                    break;
                case 'fromDropdown':
                    content = getContentFromBloq(bloq.returnType.idDropdown, bloq);
                    type = content.value;
                    break;
                case 'fromDynamicDropdown':
                    //type = bloq.returnType.value;
                    break;
                case 'fromInput':
                    //type = bloq.returnType.value;
                    break;
                default:
                    throw 'Return type undefined';
            }
        } else {
            throw 'We cant get type from a bloq witouth a returnType';
        }
        return type;
    };

    /**
     * Return the connectors from the second bloq that can connect with any connector in bloq1
     * return null if cant find a valid connector
     * First bloq is moving bloq
     */
    function canConnectStatementBloqs(bloq1, bloq2, bloqs, connectors) {
        var result = [];
        if (canConnectConnectors(bloq1.connectors[0], bloq2.connectors[1], connectors)) {
            // we must chek of its some bloq connected, to ensure that the connector and the top or bottom branch
            // can connect to ensure the bloqs join
            if (connectors[bloq2.connectors[1]].connectedTo) {
                if (canConnectConnectors(connectors[bloq2.connectors[1]].connectedTo, getLastBottomConnectorUuid(bloq1.uuid, bloqs, connectors), connectors)) {
                    result.push(bloq2.connectors[1]);
                }
            } else {
                result.push(bloq2.connectors[1]);
            }
        }
        if (canConnectConnectors(bloq1.connectors[1], bloq2.connectors[0], connectors)) {
            if (connectors[bloq2.connectors[0]].connectedTo) {
                if (canConnectConnectors(connectors[bloq2.connectors[0]].connectedTo, getFirstTopConnectorUuid(bloq1.uuid, bloqs, connectors), connectors)) {
                    result.push(bloq2.connectors[0]);
                }
            } else {
                result.push(bloq2.connectors[0]);
            }
        }
        if (bloq1.connectors[2] && canConnectConnectors(bloq1.connectors[2], bloq2.connectors[0], connectors)) {
            result.push(bloq2.connectors[0]);
        }
        if (bloq2.connectors[2] && canConnectConnectors(bloq1.connectors[0], bloq2.connectors[2], connectors)) {
            if (connectors[bloq2.connectors[2]].connectedTo) {
                if (canConnectConnectors(connectors[bloq2.connectors[2]].connectedTo, getLastBottomConnectorUuid(bloq1.uuid, bloqs, connectors), connectors)) {
                    result.push(bloq2.connectors[2]);
                }
            } else {
                result.push(bloq2.connectors[2]);
            }
        }
        if (result.length === 0) {
            result = null;
        }
        return result;
    };

    function canConnectConnectors(connectorUuid1, connectorUuid2, connectors) {
        var connector1 = connectors[connectorUuid1],
            connector2 = connectors[connectorUuid2],
            result = false;
        if (connector1 && connector2) {
            result = ((connector1.data.type === connector2.data.accept) && canConnectAliases(connector1.data.acceptedAliases, connector2.data.acceptedAliases));
        } else {
            console.log('cant check this connectors', connectorUuid1, connectorUuid2, connector1, connector2);
        }
        return result;
    };

    function canConnectAliases(acceptedAliases1, acceptedAliases2) {
        // if (acceptedAliases1 && acceptedAliases2) {
        //     console.log('---');
        //     console.log(acceptedAliases1, acceptedAliases2);
        //     console.log(arrayIntersection([acceptedAliases1, acceptedAliases2]));
        // }

        return (!acceptedAliases1 && !acceptedAliases2) || (acceptedAliases1 && acceptedAliases2 && (arrayIntersection([acceptedAliases1, acceptedAliases2]).length > 0)) || (!acceptedAliases1 && (acceptedAliases2.indexOf('all') !== -1)) || (!acceptedAliases2 && (acceptedAliases1.indexOf('all') !== -1));
    }

    function arrayIntersection(arrays) {
        return arrays.shift().filter(function (v) {
            return arrays.every(function (a) {
                return a.indexOf(v) !== -1;
            });
        });
    }

    function findAncestor(el, className) {
        var result;
        while (!result && el) {
            if (el.className.indexOf(className) !== -1) {
                result = el;
            } else {
                el = el.parentElement;
            }
        }
        return result;
    }

    function createMatrix(rows, columns) {
        var result = [];
        for (var i = 0; i < rows; i++) {
            result[i] = [];
            for (var j = 0; j < columns; j++) {
                result[i][j] = false;
            }
        }
        return result;
    }

    function removeAttributeFromSelector(attributeToRemove, selector) {
        var elems = document.querySelectorAll(selector);

        [].forEach.call(elems, function (el) {
            el.removeAttribute(attributeToRemove);
        });
    }


    bloqsUtils.validString = validString;
    bloqsUtils.validChar = validChar;
    bloqsUtils.validComment = validComment;
    bloqsUtils.delay = delay;
    bloqsUtils.validNumber = validNumber;
    bloqsUtils.validName = validName;
    bloqsUtils.generateUUID = generateUUID;
    bloqsUtils.getNumericStyleProperty = getNumericStyleProperty;
    bloqsUtils.itsOver = itsOver;
    bloqsUtils.getLastBottomConnectorUuid = getLastBottomConnectorUuid;
    bloqsUtils.getFirstTopConnectorUuid = getFirstTopConnectorUuid;
    bloqsUtils.getOutputConnector = getOutputConnector;
    bloqsUtils.getTreeHeight = getTreeHeight;
    bloqsUtils.getNodesHeight = getNodesHeight;
    bloqsUtils.drawTree = drawTree;
    bloqsUtils.drawBranch = drawBranch;
    bloqsUtils.getBranchsConnectors = getBranchsConnectors;
    bloqsUtils.getBranchsConnectorsNoChildren = getBranchsConnectorsNoChildren;
    bloqsUtils.getConnectorsUuidByAcceptType = getConnectorsUuidByAcceptType;
    bloqsUtils.getNotConnected = getNotConnected;
    bloqsUtils.getInputsConnectorsFromBloq = getInputsConnectorsFromBloq;
    bloqsUtils.generateBloqInputConnectors = generateBloqInputConnectors;
    bloqsUtils.getBloqByConnectorUuid = getBloqByConnectorUuid;
    bloqsUtils.redrawTree = redrawTree;
    bloqsUtils.itsARootConnector = itsARootConnector;
    bloqsUtils.itsInsideAConnectorRoot = itsInsideAConnectorRoot;
    bloqsUtils.jqueryObjectsArrayToHtmlToInsert = jqueryObjectsArrayToHtmlToInsert;
    bloqsUtils.connectorIsInBranch = connectorIsInBranch;
    bloqsUtils.hasClass = hasClass;
    bloqsUtils.appendArrayInOneTime = appendArrayInOneTime;
    bloqsUtils.drawDropdownOptions = drawDropdownOptions;
    bloqsUtils.getTypeFromBloq = getTypeFromBloq;
    bloqsUtils.drawSoftwareVars = drawSoftwareVars;
    bloqsUtils.drawSoftwareArray = drawSoftwareArray;
    bloqsUtils.sameConnectionType = sameConnectionType;
    bloqsUtils.getFromDynamicDropdownType = getFromDynamicDropdownType;
    bloqsUtils.fillSchemaWithContent = fillSchemaWithContent;
    bloqsUtils.removeInputsConnectorsFromBloq = removeInputsConnectorsFromBloq;
    bloqsUtils.getParent = getParent;
    bloqsUtils.checkPins = checkPins;
    bloqsUtils.splice = splice;
    bloqsUtils.translateRegExp = translateRegExp;
    bloqsUtils.executeFunctionOnConnectedStatementBloqs = executeFunctionOnConnectedStatementBloqs;
    bloqsUtils.getClassName = getClassName;
    bloqsUtils.getCaretPosition = getCaretPosition;
    bloqsUtils.setCaretPosition = setCaretPosition;
    bloqsUtils.getEmptyComponentsArray = getEmptyComponentsArray;
    bloqsUtils.getArduinoCode = getArduinoCode;
    bloqsUtils.canConnectAliases = canConnectAliases;
    bloqsUtils.canConnectStatementBloqs = canConnectStatementBloqs;
    bloqsUtils.findAncestor = findAncestor;
    bloqsUtils.createMatrix = createMatrix;
    bloqsUtils.removeAttributeFromSelector = removeAttributeFromSelector;

    return bloqsUtils;

})(window.bloqsUtils = window.bloqsUtils || {}, _, undefined);
