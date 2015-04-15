/* global $, getRandomColor */
/*jshint unused:false*/
'use strict';
//----------------------------------------------------------------//
// This file is part of the bloqs Project                         //
//                                                                //
// Date: March 2015                                               //
// Author: Irene Sanz Nieto  <irene.sanz@bq.com>                  //
//----------------------------------------------------------------//
var utils = utils || {};
//ToDo : change this
utils.triggerGlobalOnChange = function() {
    $('field1').trigger('change');
};
var connectionThreshold = 10; // px
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
utils.oppositeConnection = {
    inputs: 'output',
    output: 'inputs',
    up: 'down',
    down: 'up'
};
utils.getVariableType = {
    text: 'String',
    number: 'int'
};
utils.manageConnections = function(type, bloq1Connection, bloq2Connection, bloq1, bloq2, inputID) {
    if (bloq2Connection !== undefined && bloq1Connection !== undefined) {
        if (utils.itsOver(bloq1Connection.connectorArea, bloq2Connection.connectorArea)) {
            if (bloq1Connection.type === bloq2Connection.type || (bloq1Connection.type === 'all' || bloq2Connection.type === 'all')) { // if the type is the same --> connect
                console.log('CONNECT!', bloq2Connection.type, bloq1Connection.type);
                console.log('Bloq 1 Connection: ' + bloq1Connection, 'Bloq 1 Connection: ' + bloq2Connection, 'Bloq 1: ' + bloq1, 'Bloq 2 Connection: ' + bloq2, 'InputId: ' + inputID);
                if (type === 'inputs' || type === 'down') { // parent is bloq1
                    //move bloq
                    bloq1.updateBloqs(bloq1, bloq2, utils.oppositeConnection[type], inputID, bloq2Connection.type);
                    bloq2.moveTo(bloq1.getConnectionPosition(type, bloq2, inputID));
                    bloq1Connection.bloq = bloq2;
                    if (bloq1Connection.type === 'all') {
                        bloq1.setConnectionType(bloq1Connection, bloq2Connection);
                    }
                    //put child bloq on top if it is not already:
                    utils.bloqOnTop(bloq2);
                } else { //parent is bloq2
                    //move bloq
                    bloq1.updateBloqs(bloq2, bloq1, type, inputID, bloq1Connection.type);
                    bloq1.moveTo(bloq2.getConnectionPosition(utils.oppositeConnection[type], bloq1, inputID));
                    bloq2Connection.bloq = bloq1;
                    if (bloq2Connection.type === 'all') {
                        bloq2.setConnectionType(bloq2Connection, bloq1Connection);
                    }
                    //put child bloq on top if it is not already:
                    utils.bloqOnTop(bloq1);
                }
                bloq1.resetLastDelta();
                return true;
            } else { //reject
                utils.rejectBloq(bloq1);
                bloq1.resetLastDelta();
            }
        } else {}
    }
    return false;
};
utils.itsOver = function(dragRect, staticRect) {
    if (dragRect !== undefined && staticRect !== undefined) {
        // console.log('dragRect.x1 < staticRect.x2 && dragRect.x2 > staticRect.x1 && dragRect.y1 < staticRect.y2 && dragRect.y2 > staticRect.y1', dragRect.x1 < staticRect.x2 && dragRect.x2 > staticRect.x1 && dragRect.y1 < staticRect.y2 && dragRect.y2 > staticRect.y1);
        // console.log('dragRect.x1 < staticRect.x2 && dragRect.x2 > staticRect.x1 && dragRect.y1 < staticRect.y2 && dragRect.y2 > staticRect.y1', dragRect.x1 < staticRect.x2, dragRect.x2 > staticRect.x1, dragRect.y1 < staticRect.y2, dragRect.y2 > staticRect.y1);
        // console.log('dragRect.x1 < staticRect.x2 && dragRect.x2 > staticRect.x1 && dragRect.y1 < staticRect.y2 && dragRect.y2 > staticRect.y1', dragRect.x1, staticRect.x2, dragRect.x2, staticRect.x1, dragRect.y1, staticRect.y2, dragRect.y2, staticRect.y1);
        return dragRect.x1 < staticRect.x2 && dragRect.x2 > staticRect.x1 && dragRect.y1 < staticRect.y2 && dragRect.y2 > staticRect.y1;
    } else {
        return false;
    }
};
utils.rejectBloq = function(bloq) {
    var rejectionLocation = {
        x: 50,
        y: 0
    };
    bloq.move2({
        x: rejectionLocation.x,
        y: rejectionLocation.y
    });
};
utils.bloqOnTop = function(bloq) {
    bloq.bloqBody.node.parentNode.appendChild(bloq.bloqBody.node);
    var child = {};
    for (var i in bloq.relations.children) {
        child = bloq.relations.children[i].bloq;
        utils.bloqOnTop(child); //.node.parentNode.appendChild(child.node);
    }
};
utils.getOutputBloq = function(bloq, posx, width, height) {
    var path = 'm 36,32 c -4.418,0 -8,-2.582 -8,-7 0,-4.418 3.582,-7 8,-7 l 0,14 z';
    var group = bloq.group();
    var connector = bloq.path(path).fill('#dadada'); //.move(posx, posy);
    connector.x(posx);
    group.add(connector);
    var outputBloq = bloq.rect(width, height).fill('#dadada').radius(4).move(posx + 8, 0);
    group.add(outputBloq);
    return group;
};
// utils.getBloqPath = function(bloq, bloqData) {
//
//     var path = 'm 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 217.11582946777344 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 60 v 25 H 30 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z';
//     if (bloqData.down) {
//         // if it has a down connection, it has to have an up one
//         // lets see if it has inputs
//         if (bloqData.hasOwnProperty('inputs') && bloqData.inputs.length > 0) {
//             // deal with the inputs
//         } else {
//             // this bloq has no inputs, only top and down
//             path = 'M4.000,0.000 C4.000,0.000 321.000,0.000 321.000,0.000 C323.209,0.000 325.000,1.791 325.000,4.000 C325.000,4.000 325.000,46.000 325.000,46.000 C325.000,48.209 323.209,50.000 321.000,50.000 C321.000,50.000 4.000,50.000 4.000,50.000 C1.791,50.000 -0.000,48.209 -0.000,46.000 C-0.000,46.000 -0.000,4.000 -0.000,4.000 C-0.000,1.791 1.791,0.000 4.000,0.000 Z';
//         }
//         // deal with inner bottoms
//         // deal with inner inputs
//     } else if ((!bloqData.hasOwnProperty('down') || bloqData.down === false) && (!bloqData.hasOwnProperty('up') || bloqData.up === false)) {
//         // bloq without up or down connections
//         // this means that we have at least an output
//         if (bloqData.hasOwnProperty('inputs') && bloqData.inputs.length > 0) {
//             // deal with the inputs
//             path = 'm 0,0 H 88.04196166992188 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 5 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z';
//         } else {
//             // this bloq has no inputs
//             // absolute coordinates for path
//             utils.getOutputBloq(bloq, 0, bloq.size.width, bloq.size.height);
//             // path = 'M256,50 C256,50 12,50 12,50 C9.791,50 8,48.209 8,46 C8,46 8,33 8,33 C3.582,33 0,29.418 0,25 C0,20.582 3.582,17 8,17 C8,17 8,4 8,4 C8,1.791 9.791,0 12,0 C12,0 256,0 256,0 C258.209,0 260,1.791 260,4 C260,4 260,46 260,46 C260,48.209 258.209,50 256,50 Z';
//         }
//     } else if (bloqData.up && !bloqData.hasOwnProperty('down')) {
//         // bloq with only top
//     }
//     return path;
// };
utils.getBloqById = function(nodeId, data) {
    for (var bloqIndex in data.bloqs) {
        var bloq = data.bloqs[bloqIndex];
        if (bloq.id === nodeId) {
            return bloq;
        }
    }
    return null;
};
