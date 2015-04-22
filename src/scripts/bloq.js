/*global require */
'use strict';

var $ = require('jquery'),
    utils = require('./utils'),
    _ = require('lodash');


var connectors = {};
var bloqs = {};
var availableConnectors = [];
var bloq;

var dragstart = function(event) {

    // console.log('dragstart');
    bloq = bloqs[$(event.currentTarget).attr('data-bloq-id')];

    // console.log(bloq);

    //transparent
    event.originalEvent.dataTransfer.setDragImage(document.getElementById('empty'), 0, 0);

    var mousePosition = utils.getMousePosition(event.currentTarget);

    event.currentTarget.setAttribute('data-drag-mouseX', (event.originalEvent.pageX - mousePosition.x));
    event.currentTarget.setAttribute('data-drag-mouseY', (event.originalEvent.pageY - mousePosition.y));

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
        found;
    // For each available connector
    availableConnectors.forEach(function(dropConnectorUuid) {
        $dropConnector = $('[data-connector-id="' + dropConnectorUuid + '"]');
        // For each dragConnector
        i = 0;
        found = false;
        while (!found && (i < dragConnectors.length)) {
            $dragConnector = $('[data-connector-id="' + dragConnectors[i] + '"]');
            if ((connectors[dragConnectors[i]].data.type === connectors[dropConnectorUuid].data.accept) && utils.itsOver($dragConnector, $dropConnector, 30)) {
                found = true;
            }
            i++;
        }
        if (found) {
            $dropConnector.addClass('avaliable');
        } else {
            $dropConnector.removeClass('avaliable');
        }
    });
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

var dragend = function() {

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