/*global require */
'use strict';

var $ = require('jquery'),
    utils = require('./utils'),

    connectors = {},
    bloqs = {},
    availableConnectors = [],
    dropToCoords = null,
    bloq;

var dragstart = function(evt) {
    $(evt.currentTarget).css('transition', 'none');
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


var connectBloq = function(dragConnectors) {
    var $dragConnector,
        $dropConnector,
        i,
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
            } else {}
            i++;
        }
        if (found) {
            dropToCoords = $dropConnector.parent().offset();
            $dropConnector.addClass('avaliable');
            if ($dropConnector.hasClass('connector--top')) {
                dropToCoords.top -= $dropConnector.parent().height() + 2;
            } else {
                dropToCoords.top += $dropConnector.parent().height() + 2;
            }
        } else {
            noMatchCounter++;
            $dropConnector.removeClass('avaliable');
        }
    });

    if (noMatchCounter === availableConnectors.length) {
        dropToCoords = null;
    }
};


var drag = function(event) {

    if (event.originalEvent.clientX && event.originalEvent.clientY) {

        var target = event.target,
            x = event.originalEvent.clientX,
            y = event.originalEvent.clientY;


        target.style.left = (x - target.getAttribute('data-drag-mouseX')) + 'px';
        target.style.top = (y - target.getAttribute('data-drag-mouseY')) + 'px';

        // update the posiion attributes
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);

        connectBloq(bloq.connectors);
    }

};

var dragend = function(evt) {
    if (dropToCoords) {
        $(evt.currentTarget).css('transition', 'all .1s linear');
        $(evt.currentTarget).offset(dropToCoords);
    }
    $('.connector.avaliable').removeClass('avaliable');
    availableConnectors = [];
};



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
            bloqUuid: this.uuid
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