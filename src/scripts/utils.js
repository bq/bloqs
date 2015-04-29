/*jshint bitwise: false*/
/*global require */
'use strict';
var $ = require('jquery'),
    _ = require('lodash');
var generateUUID = function() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};
var getNumericStyleProperty = function(style, prop) {
    return parseInt(style.getPropertyValue(prop), 10);
};
var getMousePosition = function(element) {
    var x = 0,
        y = 0;
    var inner = true;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        var style = getComputedStyle(element, null);
        var borderTop = getNumericStyleProperty(style, 'border-top-width');
        var borderLeft = getNumericStyleProperty(style, 'border-left-width');
        y += borderTop;
        x += borderLeft;
        if (inner) {
            var paddingTop = getNumericStyleProperty(style, 'padding-top');
            var paddingLeft = getNumericStyleProperty(style, 'padding-left');
            y += paddingTop;
            x += paddingLeft;
        }
        inner = false;
        element = element.offsetParent;
    } while (element);
    return {
        x: x,
        y: y
    };
};
var createBloqElement = function(elementSchema) {
    var $element = null;
    switch (elementSchema.alias) {
        case 'dropdown':
            //component
            $element = $('<select>');
            $element.attr({
                name: '',
                'data-content-id': elementSchema.id
            });
            //content
            var $tempElement = null;
            for (var i = 0; i < elementSchema.options.length; i++) {
                $tempElement = $('<option>').attr({
                    value: elementSchema.options[i].value
                }).html(elementSchema.options[i].label);
                $element.append($tempElement);
            }
            break;
        case 'text':
            $element = $('<span>').html(elementSchema.value);
            break;
        case 'numberInput':
            $element = $('<input>').attr({
                type: 'number',
                'data-content-id': elementSchema.id,
                placeholder: elementSchema.placeholder
            }).html(elementSchema.value);
            break;
        case 'stringInput':
            $element = $('<input>').attr({
                type: 'text',
                'data-content-id': elementSchema.id,
                placeholder: elementSchema.placeholder
            }).val(elementSchema.value);
            break;
        case 'varInput':
            $element = $('<input>').attr({
                type: 'text',
                'data-content-id': elementSchema.id,
                placeholder: elementSchema.placeholder
            }).html(elementSchema.value);
            $element.addClass('var--input');
            break;
        case 'bloqInput':
            $element = $('<div>').attr({
                'data-connector-name': elementSchema.name,
                'data-content-id': elementSchema.id,
            });
            $element.addClass('bloqinput');
            break;
        default:
            throw 'elementSchema not defined: ' + elementSchema.alias;
    }
    // console.log('$element',$element.val());
    return $element;
};
var itsOver = function(dragConnector, dropConnector, margin) {
    margin = margin || 0;
    if (!dropConnector.offset()) {
        console.log('hop');
    }
    return dragConnector.offset().left < (dropConnector.offset().left + dropConnector.width() + margin) && (dragConnector.offset().left + dragConnector.width()) > (dropConnector.offset().left - margin) && dragConnector.offset().top < (dropConnector.offset().top + dropConnector.height() + margin) && (dragConnector.offset().top + dragConnector.height()) > (dropConnector.offset().top - margin);
};
/**
 * Get the extreme of the tree, the root or the leaf
 * @param  bloqUuid
 * @param  connectors
 * @param  bloqs
 * @param  connectorPosition 0: tipical position of the top-connector, 1: bottom-connector
 * @return
 */
var getTreeExtreme = function(bloqUuid, bloqs, connectors, connectorPosition) {
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
var getLastBottomConnectorUuid = function(bloqUuid, bloqs, connectors) {
    return getTreeExtreme(bloqUuid, bloqs, connectors, 1);
};
/**
 * From a bloq, this function get the top Connector of the branch.
 * @param  {[type]} bloqUuid   [description]
 * @param  {[type]} connectors [description]
 * @param  {[type]} bloqs      [description]
 * @return {[type]}            [description]
 */
var getFirstTopConnectorUuid = function(bloqUuid, bloqs, connectors) {
    return getTreeExtreme(bloqUuid, bloqs, connectors, 0);
};
/**
 * Get the output connector from a output bloq
 * @param  bloq
 * @param  IOConnectors
 * @return              the connector
 */
var getOutputConnector = function(bloq, IOConnectors) {
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
var getNodesHeight = function(bloqUuid, bloqIsTop, bloqs, connectors) {
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
var getTreeHeight = function(bloqUuid, bloqs, connectors) {
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
var drawBranch = function(bloqs, connectors, topConnectorUuid) {
    var branchUuid = connectors[topConnectorUuid].bloqUuid;
    console.log('          ******* - branch - *********', branchUuid);
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
var drawTree = function(bloqs, connectors) {
    console.log('drawtree');
    //buscamos los tipo statement q no tienen un top conectado
    for (var uuid in bloqs) {
        if (bloqs[uuid].bloqData.type === 'statement' || bloqs[uuid].bloqData.type === 'statement-input') {
            if (!connectors[bloqs[uuid].connectors[0]].connectedTo) {
                console.log('******* - tree - *********', uuid);
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
            }
        }
    }
};
var moveTreeNodes = function(connectorUuid, deltaX, deltaY, goUp, connectors, bloqs) {
    if (connectorUuid) {
        var bloq = bloqs[connectors[connectorUuid].bloqUuid];
        bloq.$bloq.offset({
            top: bloq.$bloq.offset().top + deltaY,
            left: bloq.$bloq.offset().left + deltaX
        });
        if (goUp) {
            moveTreeNodes(connectors[bloq.connectors[0]].connectedTo, deltaX, deltaY, goUp, connectors, bloqs);
        } else {
            moveTreeNodes(connectors[bloq.connectors[1]].connectedTo, deltaX, deltaY, goUp, connectors, bloqs);
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
var getBranchsConnectors = function(bloqUuid, connectors, bloqs) {
    var bloq = bloqs[bloqUuid];
    //console.log('tiene un hijo', connectors[bloq.connectors[1]].connectedTo);
    if (!connectors[bloq.connectors[1]].connectedTo) {
        return bloq.connectors;
    } else {
        var bloqBranchUuid = connectors[connectors[bloq.connectors[1]].connectedTo].bloqUuid;
        return _.uniq(bloq.connectors.concat(getBranchsConnectors(bloqBranchUuid, connectors, bloqs)));
    }
};
var getConnectorsUuidByType = function(IOConnectors, type) {
    var result = [];
    for (var key in IOConnectors) {
        if (IOConnectors[key].data.type === type) {
            result.push(IOConnectors[key].uuid);
        }
    }
    return result;
};
var getNotConnected = function(IOConnectors, uuids) {
    var result = [];
    for (var i = 0; i < uuids.length; i++) {
        if (!IOConnectors[uuids[i]].connectedTo) {
            result.push(uuids[i]);
        }
    }
    return result;
};
var getInputsConnectorsFromBloq = function(IOConnectors, bloqs, bloq) {
    var result = [];
    var uuid,
        connectedOutput,
        connectedBloq;
    for (var i = 0; i < bloq.IOConnectors.length; i++) {
        uuid = bloq.IOConnectors[i];
        if (IOConnectors[uuid].data.type === 'connector--input') {
            result.push(uuid);
            connectedOutput = IOConnectors[uuid].connectedTo;
            if (connectedOutput) {
                connectedBloq = bloqs[IOConnectors[connectedOutput].bloqUuid];
                result = _.union(result, getInputsConnectorsFromBloq(IOConnectors, bloqs, connectedBloq));
            }
        }
    }
    return result;
};
var generateBloqInputConnectors = function(bloq) {
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
var getBloqByConnectorUuid = function(connectorUuid, bloqs, connectors) {
    return bloqs[connectors[connectorUuid].bloqUuid];
};

var redrawTree = function(bloq, bloqs, connectors) {
    var rootBloq = getBloqByConnectorUuid(getFirstTopConnectorUuid(bloq.uuid, bloqs, connectors), bloqs, connectors);
    console.log('rootBloq', rootBloq.uuid);

    var somethingConnectedInBottomUuid = connectors[rootBloq.connectors[1]].connectedTo;
    var branchBloq,
        top = rootBloq.$bloq.position().top + rootBloq.$bloq.outerHeight(true),
        left = rootBloq.$bloq.position().left;
    while (somethingConnectedInBottomUuid) {
        branchBloq = bloqs[connectors[somethingConnectedInBottomUuid].bloqUuid];
        branchBloq.$bloq.css({
            top: top,
            left: left
        });
        top += branchBloq.$bloq.outerHeight(true);
        somethingConnectedInBottomUuid = connectors[branchBloq.connectors[1]].connectedTo;
    }

};

module.exports.generateUUID = generateUUID;
module.exports.getNumericStyleProperty = getNumericStyleProperty;
module.exports.getMousePosition = getMousePosition;
module.exports.createBloqElement = createBloqElement;
module.exports.itsOver = itsOver;
module.exports.getLastBottomConnectorUuid = getLastBottomConnectorUuid;
module.exports.getFirstTopConnectorUuid = getFirstTopConnectorUuid;
module.exports.getOutputConnector = getOutputConnector;
module.exports.getTreeHeight = getTreeHeight;
module.exports.getNodesHeight = getNodesHeight;
module.exports.drawTree = drawTree;
module.exports.drawBranch = drawBranch;
module.exports.moveTreeNodes = moveTreeNodes;
module.exports.getBranchsConnectors = getBranchsConnectors;
module.exports.getConnectorsUuidByType = getConnectorsUuidByType;
module.exports.getNotConnected = getNotConnected;
module.exports.getInputsConnectorsFromBloq = getInputsConnectorsFromBloq;
module.exports.generateBloqInputConnectors = generateBloqInputConnectors;
module.exports.getBloqByConnectorUuid = getBloqByConnectorUuid;
module.exports.redrawTree = redrawTree;
