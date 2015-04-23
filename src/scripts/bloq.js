/*global require */
/*jshint latedef: false */
'use strict';

var $ = require('jquery'),
    utils = require('./utils'),

    connectors = {},
    bloqs = {},
    availableConnectors = [],
    dropToCoords = null,
    $dropConnector,
    $dragConnector,
    bloq;


var dragstart = function(evt) {
    //$(evt.currentTarget).css('transition', 'none');
    // console.log('dragstart');
    bloq = bloqs[$(evt.currentTarget).attr('data-bloq-id')];

    // console.log(bloq);

    //transparent
    evt.originalEvent.dataTransfer.setDragImage(document.getElementById('empty'), 0, 0);

    var mousePosition = utils.getMousePosition(evt.currentTarget);

    evt.currentTarget.setAttribute('data-drag-mouseX', (evt.originalEvent.pageX - mousePosition.x));
    evt.currentTarget.setAttribute('data-drag-mouseY', (evt.originalEvent.pageY - mousePosition.y));

    var acceptTypes = [];

    for (var i = 0; i < bloq.connectors.length; i++) {
        acceptTypes = acceptTypes.concat(connectors[bloq.connectors[i]].data.accept);
    }

    //store the avaliable connectors
    var found = false;
    var j = 0;
    for (var connectorUuid in connectors) {
        if (connectors[connectorUuid].bloqUuid !== bloq.uuid) {
            j = 0;
            found = false;
            while (!found && (j < acceptTypes.length)) {

                if (connectors[connectorUuid].data.type === acceptTypes[j]) {
                    found = true;
                    availableConnectors.push(connectorUuid);
                }
                j++;
            }
        }
    }
};

var drag = function(evt) {

    if (evt.originalEvent.clientX && evt.originalEvent.clientY) {

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

        console.log('start move conected bloqs');
        var bloqueConectado;
        for (var i = 0; i < bloq.connectors.length; i++) {
            console.log('connector ', bloq.connectors[i]);
            if (connectors[bloq.connectors[i]].connectedTo) {
                console.log('connector', bloq.connectors[i], 'conectado a ', connectors[bloq.connectors[i]].connectedTo);
                bloqueConectado = bloqs[connectors[bloq.connectors[i]].bloqUuid];
                console.log(bloqueConectado.$bloq.offset().top);
                console.log(bloqueConectado.$bloq.offset().left);
            } else {
                console.log('connector', bloq.connectors[i], 'no conectado');
            }
            // console.log(connectors[bloq.connectors[i]].jqueryObject.offset().top);
            // console.log(connectors[bloq.connectors[i]].jqueryObject.offset().left);
            // connectors[bloq.connectors[i]].jqueryObject.css({
            //     top: connectors[bloq.connectors[i]].jqueryObject.offset().top + deltaY,
            //     left: connectors[bloq.connectors[i]].jqueryObject.offset().left + deltaX
            // });
        }

        handleCollisions(bloq.connectors, evt);
    }

};

var dragend = function(evt) {
    var $bloq = $(evt.currentTarget);
    console.log('evt.currentTarget');
    console.log(evt.currentTarget);
    console.log($('.connector.avaliable'));

    var dropConnectorUuid = $('.connector.avaliable').attr('data-connector-id');
    var dragConnectorUUid = $('[data-connector-id]="' + dropConnectorUuid + '"').attr('data-canconnectwith');
    setConnections(, dropConnectorUuid);
    console.log('dragBloqUuid', dragBloqUuid);
    console.log('dropUuid', dropConnectorUuid);
    //connectors[dropConnectorUuid].connectedTo =
    /*
        availableConnectors.forEach(function(dropConnectorUuid) {
            $dropConnector = $('[data-connector-id="' + dropConnectorUuid + '"]');

        });
        // If trying to connect a bloq
        if (dropToCoords) {
            // Set parent
            setConnections($dragConnector.attr('data-connector-id'), $dropConnector.attr('data-connector-id'));
            // Move the bloq
            placeNestedBloq($bloq);

            $('.connector.avaliable').removeClass('avaliable');
        }
    */
    // Reset available connectors
    availableConnectors = [];
};

var handleCollisions = function(dragConnectors, evt) {
    var i,
        noMatchCounter = 0,
        found;

    // For each available connector
    availableConnectors.forEach(function(dropConnectorUuid) {
        $dropConnector = $('[data-connector-id="' + dropConnectorUuid + '"]');
        i = 0;
        found = false;
        while (!found && (i < dragConnectors.length)) {
            $dragConnector = $('[data-connector-id="' + dragConnectors[i] + '"]');
            if ((connectors[dragConnectors[i]].data.type === connectors[dropConnectorUuid].data.accept) && utils.itsOver($dragConnector, $dropConnector, 20)) {
                found = true;
            }
            i++;
        }
        if (found) {
            //dropToCoords = $dropConnector.parent().offset();
            $dropConnector.addClass('avaliable');
            $dropConnector.attr('data-canconnectwith', dragConnectors[i]);
            // if ($dropConnector.hasClass('connector--top')) {
            //     dropToCoords.top -= $dropConnector.parent().height() + 2;
            // } else if ($dropConnector.hasClass('connector--bottom')) {
            //     dropToCoords.top += $dropConnector.parent().height() + 2;
            // }

        } else {
            //noMatchCounter++;
            $dropConnector.removeClass('avaliable');
            $dropConnector.attr('data-canconnectwith', '');
        }
    });

    // if (noMatchCounter === availableConnectors.length) {
    //     dropToCoords = null;
    //     if ($(evt.currentTarget).hasClass('nested--bloq')) {
    //         $(evt.currentTarget).removeClass('nested--bloq');
    //     }
    // }
};

var setConnections = function(dropConnectorUuid, dragConnectorUUid) {
    console.log('conectamos', dropConnectorUuid, 'con ', dragConnectorUUid);
    connectors[dropConnectorUuid].connectedTo = dragConnectorUUid;
    connectors[dragConnectorUUid].connectedTo = dropConnectorUuid;
};

var placeNestedBloq = function($bloq) {
    if ($bloq.hasClass('bloq--statement')) {

        console.log('bloq statement!');

    } else if ($bloq.hasClass('bloq--output')) {

        console.log('bloq output!');

    } else {

    }

    // @TODO: handle movement with transform:translate
    $bloq.offset(dropToCoords);
};


// Block Constructor
var Bloq = function Bloq(params) {

    this.uuid = utils.generateUUID();

    this.bloqData = params.bloqData;
    this.connectors = [];

    //creation

    this.$bloq = $('<div>').attr({
        'data-bloq-id': this.uuid,
        draggable: true,
        tabIndex: 0
    });

    this.$bloq.addClass('bloq bloq--' + this.bloqData.type);


    //connectors
    var $tempConnector, tempUuid;
    for (var i = 0; i < params.bloqData.connectors.length; i++) {
        tempUuid = utils.generateUUID();

        $tempConnector = $('<div>').attr({
            'data-connector-id': tempUuid
        });
        $tempConnector.addClass('connector ' + params.bloqData.connectors[i].type);

        connectors[tempUuid] = {
            jqueryObject: $tempConnector,
            uuid: tempUuid,
            data: params.bloqData.connectors[i],
            bloqUuid: this.uuid,
            connectedTo: null
        };

        this.connectors.push(tempUuid);
        this.$bloq.append($tempConnector);
    }

    //content
    var $tempElement;
    for (var j = 0; j < this.bloqData.content.length; j++) {
        for (var k = 0; k < this.bloqData.content[j].length; k++) {
            $tempElement = utils.createBloqElement(this.bloqData.content[j][k]);
            this.$bloq.append($tempElement);
        }
    }

    this.$bloq.children().not('.connector').first().addClass('bloq__inner--first');
    this.$bloq.children().not('.connector').last().addClass('bloq__inner--last');


    //binds
    this.$bloq.bind('dragstart', dragstart);
    this.$bloq.bind('drag', drag);
    this.$bloq.bind('dragend', dragend);

    bloqs[this.uuid] = this;

    return this.$bloq;
};

module.exports = Bloq;