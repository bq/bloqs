/*global require */
/*jshint latedef: false */
'use strict';

var $ = require('jquery'),
    utils = require('./utils'),
    _ = require('lodash'),
    connectors = {},
    IOConnectors = {},
    bloqs = {},
    availableConnectors = [],
    availableIOConnectors = [];


var dragstart = function(evt) {


    //$(evt.currentTarget).css('transition', 'none');
    // console.log('dragstart');
    var bloq = bloqs[$(evt.currentTarget).attr('data-bloq-id')];
    console.log('dragstart', bloq.uuid);
    evt.stopPropagation();


    // console.log(bloq);

    //transparent
    evt.originalEvent.dataTransfer.setDragImage(document.getElementById('empty'), 0, 0);

    var mousePosition = utils.getMousePosition(evt.currentTarget);

    evt.currentTarget.setAttribute('data-drag-mouseX', (evt.originalEvent.pageX - mousePosition.x));
    evt.currentTarget.setAttribute('data-drag-mouseY', (evt.originalEvent.pageY - mousePosition.y));

    switch (bloq.bloqData.type) {
        case 'statement':
            statementDragStart(bloq);
            break;
        case 'output':
            outputDragStart(bloq);
            console.log('output bloq');
            break;
        default:
            throw 'Not defined bloq dragstart!!';
    }
};

var statementDragStart = function(bloq) {
    var acceptTypes = [];

    //first connector
    acceptTypes = acceptTypes.concat(connectors[bloq.connectors[0]].data.accept);
    //las Children Connector
    acceptTypes = acceptTypes.concat(connectors[utils.getLastBottomConnectorUuid(bloq.uuid, connectors, bloqs)].data.accept);



    if (connectors[bloq.connectors[0]].connectedTo) {
        connectors[connectors[bloq.connectors[0]].connectedTo].connectedTo = null;
        connectors[bloq.connectors[0]].connectedTo = null;
    }

    //store the available connectors
    var notAvailableConnectors = utils.getBranchsConnectors(bloq.uuid, connectors, bloqs);
    var totalConectorsUuids = _.keys(connectors);
    availableConnectors = _.difference(totalConectorsUuids, notAvailableConnectors);


    //bloq.$bloq.addClass('');
    for (var i = 0; i < notAvailableConnectors.length; i++) {
        bloqs[connectors[notAvailableConnectors[i]].bloqUuid].$bloq.addClass('dragging');
    }

    //console.log(availableConnectors);
    //console.log(notAvailableConnectors);
};

var outputDragStart = function(bloq) {
    var outputConnector = utils.getOutputConnector(bloq, IOConnectors);
    if (outputConnector.connectedTo) {
        bloq.$bloq.removeClass('nested-bloq');

        var bloqConnector = IOConnectors[outputConnector.connectedTo];

        //remove the logical conexions
        bloqConnector.connectedTo = null;
        outputConnector.connectedTo = null;

        //Chrome bug http://stackoverflow.com/questions/14203734/dragend-dragenter-and-dragleave-firing-off-immediately-when-i-drag
        //Dragend its fired on changing dom of dragable element, timeout fix this
        setTimeout(function() {
            console.log('append');
            $('#field').append(bloq.$bloq);

            bloqConnector.jqueryObject.css('width', '50px');
            //another bug on chrome, we need to remove and add again the width, to force the browser to redraw
            setTimeout(function() {
                bloqConnector.jqueryObject.css('width', 'auto');
            }, 100);
        }, 0);

    }
    bloq.$bloq.addClass('dragging');

    //store the available connectors
    var notAvailableConnectors = utils.getInputsConnectors(bloqs[bloq.uuid], IOConnectors);
    var totalConectorsUuids = _.keys(IOConnectors);
    availableIOConnectors = _.difference(totalConectorsUuids, notAvailableConnectors);

};


var drag = function(evt) {
    //console.log('draging');
    if (evt.originalEvent.clientX && evt.originalEvent.clientY) {
        var bloq = bloqs[$(evt.currentTarget).attr('data-bloq-id')];
        //console.log('moving', bloq.uuid);
        var target = evt.currentTarget,
            x = evt.originalEvent.clientX,
            y = evt.originalEvent.clientY;

        var originX = target.style.left,
            originY = target.style.top;


        var destinationX = (x - target.getAttribute('data-drag-mouseX')),
            destinationY = (y - target.getAttribute('data-drag-mouseY'));

        target.style.left = destinationX + 'px';
        target.style.top = destinationY + 'px';


        var deltaX = destinationX - parseInt(originX, 10),
            deltaY = destinationY - parseInt(originY, 10);
        //console.log('deltaX', deltaX, 'deltaY', deltaY);

        //console.log('start move conected bloqs', connectors[bloq.connectors[1]].connectedTo);
        //console.log(bloq.bloqData.type);
        switch (bloq.bloqData.type) {
            case 'statement':
                utils.moveTreeNodes(connectors[bloq.connectors[1]].connectedTo, deltaX, deltaY, false, connectors, bloqs);
                handleCollisions([bloq.connectors[0], utils.getLastBottomConnectorUuid(bloq.uuid, connectors, bloqs)], evt);
                break;
            case 'output':
                //console.log('output bloq drag');
                handleIOCollisions(bloq, availableIOConnectors);
                break;
            default:
                throw 'Not defined bloq drag!!';
        }
    }
};



var dragend = function(evt) {
    console.log('dragend');
    $('.bloq').removeClass('dragging');
    var bloq = bloqs[$(evt.currentTarget).attr('data-bloq-id')];
    switch (bloq.bloqData.type) {
        case 'statement':
            statementDragEnd();
            break;
        case 'output':
            outputDragEnd(bloq);
            break;
        default:
            throw 'Not defined bloq drag!!';
    }
};

var statementDragEnd = function() {
    var $dropConnector = $('.connector.available');
    if ($dropConnector[0]) {
        var dropConnectorUuid = $dropConnector.attr('data-connector-id');
        var dragConnectorUuid = $('[data-connector-id="' + dropConnectorUuid + '"]').attr('data-canconnectwith');

        //console.log('dragConnectorUuid', dragConnectorUuid);
        //console.log('dropUuid', dropConnectorUuid);
        placeNestedBloq(dropConnectorUuid, dragConnectorUuid);
        setConnections(dropConnectorUuid, dragConnectorUuid);
    }
    $('.connector.available').removeClass('available');

    availableConnectors = [];
    utils.drawTree(bloqs, connectors);
};

var outputDragEnd = function(bloq) {
    var $dropConnector = $('.connector.available');
    if ($dropConnector[0]) {
        var dropConnectorUuid = $dropConnector.attr('data-connector-id');
        var dragConnectorUuid = utils.getOutputConnector(bloq, IOConnectors).uuid;

        $dropConnector.append(bloq.$bloq);
        bloq.$bloq.addClass('nested-bloq').removeAttr('style');

        IOConnectors[dropConnectorUuid].connectedTo = dragConnectorUuid;
        IOConnectors[dragConnectorUuid].connectedTo = dropConnectorUuid;

    }

    $dropConnector.removeClass('available');
};

var handleCollisions = function(dragConnectors) {
    var i,
        found,
        $dropConnector,
        $dragConnector;

    // For each available connector
    availableConnectors.forEach(function(dropConnectorUuid) {
        $dropConnector = $('[data-connector-id="' + dropConnectorUuid + '"]');
        i = 0;
        found = false;
        while (!found && (i < dragConnectors.length)) {
            $dragConnector = $('[data-connector-id="' + dragConnectors[i] + '"]');

            if ((connectors[dragConnectors[i]].data.type === connectors[dropConnectorUuid].data.accept) && utils.itsOver($dragConnector, $dropConnector, 20)) {
                found = true;
            } else {
                i++;
            }
        }
        if (found) {
            $dropConnector.addClass('available');
            $dropConnector.attr('data-canconnectwith', dragConnectors[i]);
        } else {
            $dropConnector.removeClass('available');
            $dropConnector.removeAttr('data-canconnectwith');
        }
    });
};


var handleIOCollisions = function(bloq, availableIOConnectors) {
    var dropConnector;

    var dragConnector = utils.getOutputConnector(bloq, IOConnectors);


    availableIOConnectors.forEach(function(dropConnectorUuid) {
        dropConnector = IOConnectors[dropConnectorUuid];

        if (dragConnector.data.type === dropConnector.data.accept && utils.itsOver(dragConnector.jqueryObject, dropConnector.jqueryObject, 20)) {

            dropConnector.jqueryObject.addClass('available');

        } else {
            dropConnector.jqueryObject.removeClass('available');

        }
    });
};

var setConnections = function(dropConnectorUuid, dragConnectorUUid) {
    //console.log('conectamos', dropConnectorUuid, connectors[dropConnectorUuid].data.type, 'con ', dragConnectorUUid, connectors[dragConnectorUUid].data.type);
    //console.log('conectado con', connectors[dropConnectorUuid].connectedTo, 'y el otro con', connectors[dragConnectorUUid].connectedTo);
    if (connectors[dropConnectorUuid].connectedTo) {
        if (connectors[dropConnectorUuid].data.type === 'connector--bottom') {
            var dropBottomConnectorUuid = connectors[dropConnectorUuid].connectedTo,
                dragBloqLastBottomConnectorUuid = utils.getLastBottomConnectorUuid(connectors[dragConnectorUUid].bloqUuid, connectors, bloqs);
            connectors[dragBloqLastBottomConnectorUuid].connectedTo = dropBottomConnectorUuid;
            connectors[dropBottomConnectorUuid].connectedTo = dragBloqLastBottomConnectorUuid;
        } else if (connectors[dropConnectorUuid].data.type === 'connector--top') {
            var dropTopConnectorUuid = connectors[dropConnectorUuid].connectedTo,
                dragBloqFirstTopConnectorUuid = utils.getFirstTopConnectorUuid(connectors[dragConnectorUUid].bloqUuid, connectors, bloqs);
            connectors[dropTopConnectorUuid].connectedTo = dragBloqFirstTopConnectorUuid;
            connectors[dragBloqFirstTopConnectorUuid].connectedTo = dropTopConnectorUuid;
        }
    }
    connectors[dropConnectorUuid].connectedTo = dragConnectorUUid;
    connectors[dragConnectorUUid].connectedTo = dropConnectorUuid;
};

var placeNestedBloq = function(dropConnectorUuid, dragConnectorUUid) {
    console.log('Nest');

    var dropBloq = bloqs[connectors[dropConnectorUuid].bloqUuid],
        dragBloq = bloqs[connectors[dragConnectorUUid].bloqUuid];
    console.log(dropBloq, dragBloq);

    switch (dropBloq.bloqData.type) {
        case 'statement':
            var originX = dragBloq.$bloq.offset().left,
                originY = dragBloq.$bloq.offset().top,
                finalTop,
                finalLeft = dropBloq.$bloq.offset().left,
                goUp = false,
                dropBloqsMoveOrientation = 1,
                connectorsStart = connectors[dragBloq.connectors[1]].connectedTo;
            if (connectors[dropConnectorUuid].data.type === 'connector--top') {

                finalTop = dropBloq.$bloq.offset().top - dragBloq.$bloq.outerHeight(true);
                connectorsStart = connectors[dragBloq.connectors[0]].connectedTo;
                goUp = true;
                dropBloqsMoveOrientation = -1;
            } else {
                finalTop = dropBloq.$bloq.offset().top + dragBloq.$bloq.outerHeight(true);
            }
            if (connectors[dropConnectorUuid].connectedTo) {
                utils.moveTreeNodes(connectors[dropConnectorUuid].connectedTo, 0, utils.getTreeHeight(dragBloq.uuid, bloqs, connectors) * (dropBloqsMoveOrientation), goUp, connectors, bloqs);
            }
            dragBloq.$bloq.offset({
                top: finalTop,
                left: finalLeft
            });
            utils.moveTreeNodes(connectorsStart, finalLeft - originX, finalTop - originY, goUp, connectors, bloqs);
            break;
        case 'output':
            break;
        default:
            throw 'bloqtype not defined in nesting' + dropBloq.bloqData.type;
    }
};


// Block Constructor
var Bloq = function Bloq(params) {
    console.log(params.bloqData);
    this.uuid = utils.generateUUID();

    this.bloqData = params.bloqData;
    this.connectors = [];
    this.IOConnectors = [];

    //creation

    this.$bloq = $('<div>').attr({
        'data-bloq-id': this.uuid,
        draggable: true,
        tabIndex: 0
    });

    this.$bloq.addClass('bloq bloq--' + this.bloqData.type);


    //content
    var $tempElement;
    for (var j = 0; j < this.bloqData.content.length; j++) {
        for (var k = 0; k < this.bloqData.content[j].length; k++) {
            $tempElement = utils.createBloqElement(this.bloqData.content[j][k]);
            this.$bloq.append($tempElement);
        }
    }

    //connectors
    var $connector, tempUuid, tempConnector;
    for (var i = 0; i < params.bloqData.connectors.length; i++) {

        tempUuid = utils.generateUUID();

        tempConnector = {
            uuid: tempUuid,
            data: params.bloqData.connectors[i],
            bloqUuid: this.uuid,
            connectedTo: null
        };

        switch (params.bloqData.connectors[i].type) {
            case 'connector--top':
            case 'connector--bottom':
                $connector = $('<div>').attr({
                    'data-connector-id': tempUuid
                });
                $connector.addClass('connector connector--offline ' + params.bloqData.connectors[i].type);

                this.$bloq.append($connector);

                connectors[tempUuid] = tempConnector;

                this.connectors.push(tempUuid);
                break;
            case 'connector--input':
                $connector = $(this.$bloq.children('.bloqinput[data-connector-name="' + params.bloqData.connectors[i].name + '"]'));

                $connector.attr({
                    'data-connector-id': tempUuid
                }).addClass('connector ' + params.bloqData.connectors[i].type);


                IOConnectors[tempUuid] = tempConnector;

                this.IOConnectors.push(tempUuid);
                break;
            case 'connector--output':
                $connector = $('<div>').attr({
                    'data-connector-id': tempUuid
                }).addClass('connector connector--offline ' + params.bloqData.connectors[i].type);

                this.$bloq.append($connector);

                IOConnectors[tempUuid] = tempConnector;

                this.IOConnectors.push(tempUuid);
                break;


            default:
                throw 'Connector not defined to build';
        }
        tempConnector.jqueryObject = $connector;
    }

    this.$bloq.children().not('.connector.connector--offline').first().addClass('bloq__inner--first');
    this.$bloq.children().not('.connector.connector--offline').last().addClass('bloq__inner--last');


    //binds
    this.$bloq.bind('dragstart', dragstart);
    this.$bloq.bind('drag', drag);
    this.$bloq.bind('dragend', dragend);

    bloqs[this.uuid] = this;

    return this.$bloq;
};

module.exports = Bloq;