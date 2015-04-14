"use strict";
// Source: src/utils.js
/* global $, getRandomColor */
/*jshint unused:false*/
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
    var connector = bloq.path(path).fill('#cccccc'); //.move(posx, posy);
    connector.x(posx);
    group.add(connector);
    var outputBloq = bloq.rect(width, height).fill('#cccccc').radius(4).move(posx + 8, 0);
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

// Source: src/bloq.js
/* global utils, connectionThreshold, getRandomColor, document, Option */
//----------------------------------------------------------------//
// This file is part of the bloqs Project                         //
//                                                                //
// Date: March 2015                                               //
// Author: Irene Sanz Nieto  <irene.sanz@bq.com>                  //
//----------------------------------------------------------------//
function Bloq(bloqData, position, data) {
    this.canvas = data.canvas;
    this.bloqBody = this.canvas.group().move(position[0], position[1]);
    this.bloqData = bloqData;
    this.bloqName = this.bloqData.label;
    this.data = data;
    this.size = {
        width: 100,
        height: 50
    };
    this.delta = {
        x: 0,
        y: 0,
        lastx: 0,
        lasty: 0
    };
    this.bloqInput = {
        width: 70,
        height: 50
    };
    this.code = this.bloqData.code;
    /**
     * We store relations here, using nodes
     * @type {{parent: undefined, children: Array}}
     */
    this.relations = {
        parent: undefined,
        children: [],
        codeChildren: [],
        inputChildren: []
    };
    this.childrenNumber = 0;
    //Create the connectors using the bloq information
    this.createConnectors();
    // basic shape of the bloq
    this.body = this.bloqBody.rect(this.size.width, this.size.height).fill(bloqData.color).radius(4);
    this.id = this.body.node.id;
    // this.border = this.path(path).fill(bloqData.color).hide(); // give a hidden 'body' to the border path
    // this.border.stroke({
    //     color: '#e5a33b',
    //     width: 3
    // });
    this.size = {
        width: this.bloqBody.bbox().width,
        height: this.bloqBody.bbox().height
    };
    this.childrenHeight = this.size.height;
    if (this.bloqData.hasOwnProperty('text')) {
        this.createBloqUI();
    }
    this.bloqBody.dragmove = Bloq.prototype.dragmove;
    this.bloqBody.dragend = Bloq.prototype.dragend;
    var that = this;
    this.bloqBody.getBloqObject = function() {
        return that;
    };
    if (this.bloqData.getVariable !== undefined) {
        //Add onChange listener to detect changes in the variables' name!
        document.getElementById(this.data.element).addEventListener('change', function() {
            var childNodes = document.getElementById(that.dropdownInput).childNodes;
            var counter = 0;
            for (var i in that.data.variables) {
                childNodes[0][counter].text = that.data.variables[i].label;
                counter++;
            }
        }, false);
    }
}
Bloq.prototype.addVariable = function(id, varName, type) {
    //If bloq is creating a new variable, add it :
    if (this.bloqData.variable !== undefined) {
        this.data.variables[id] = {
            label: varName,
            name: varName,
            type: type
        };
    }
};
/**
 * We start dragging
 */
Bloq.prototype.dragmove = function(a) {
    //Set the dragmove flag to true because we are dragging the bloq
    this.dragmoveFlag = true;
    //Get the parent bloq to use its functions
    var bloq = this.getBloqObject();
    //move dragged bloq on top
    utils.bloqOnTop(bloq);
    // remove parent of this and child in parent:
    if (bloq.relations.parent !== undefined) {
        var parentBloq = utils.getBloqById(bloq.relations.parent, bloq.data);
        //resize UI if needed
        parentBloq.resizeUI(bloq);
        //remove child from parent and parent from child
        parentBloq.deleteChild(this.getBloqObject());
        this.getBloqObject().deleteParent(false);
    }
    //update the deltas:
    bloq.updateDeltas(a);
    //Update the bloq's connectors using the new deltas
    bloq.updateConnectors(bloq.delta);
    // move child bloqs along with this one
    bloq.moveChildren({
        x: bloq.delta.x,
        y: bloq.delta.y
    });
};
/**
 * We stop dragging
 */
Bloq.prototype.dragend = function() {
    //Get the parent bloq to use its functions
    var bloq = this.getBloqObject();
    //Set childrenNumber to the current number of children
    bloq.childrenNumber = bloq.relations.children.length;
    //Flag used to prevent the execution of these functions when dragend is called after just a click on the bloq!
    if (this.dragmoveFlag) {
        //Initialize lastx y lasty
        bloq.resetLastDelta();
        //Check for connections:
        bloq.searchNewConnections();
        this.dragmoveFlag = false;
    }
};
Bloq.prototype.searchNewConnections = function() {
    var a;
    for (var j in this.connections) {
        console.log('Searching connection in bloqs connection:++++++++++++++++++++++++++++++++++', j);
        for (var i in this.data.bloqs) {
            //If i is a number (not a string such as 'loop' or 'setup') and the id is different from the current bloq's
            if (!isNaN(parseInt(i, 10)) && this.data.bloqs[i].id !== this.id) {
                if (j === 'inputs') {
                    for (var k in this.connections[j]) {
                        a = utils.manageConnections(j, this.connections[j][k], this.data.bloqs[i].connections[utils.oppositeConnection[j]], this, this.data.bloqs[i], k);
                    }
                } else if (j === 'output') {
                    for (var h in this.data.bloqs[i].connections[utils.oppositeConnection[j]]) {
                        a = utils.manageConnections(j, this.connections[j], this.data.bloqs[i].connections[utils.oppositeConnection[j]][h], this, this.data.bloqs[i], h);
                    }
                } else if (j === 'down') {
                    for (var l in this.connections[j]) {
                        a = utils.manageConnections(j, this.connections[j][l], this.data.bloqs[i].connections[utils.oppositeConnection[j]], this, this.data.bloqs[i], l);
                    }
                } else if (j === 'up') {
                    for (var m in this.data.bloqs[i].connections[utils.oppositeConnection[j]]) {
                        a = utils.manageConnections(j, this.connections[j], this.data.bloqs[i].connections[utils.oppositeConnection[j]][m], this, this.data.bloqs[i], m);
                    }
                }
            }
        }
        console.log('-------------');
    }
    console.log('-----------------------------------------------------------------------');
};
//////******    BLOQ RELATIONS    ******//////
Bloq.prototype.updateBloqs = function(parent, child, type, inputID, connectionType) {
    parent.setChildren(child.id, type, inputID, connectionType);
    child.setParent(parent.id);
};
Bloq.prototype.deleteParent = function(cascade) {
    if (cascade !== false) {
        var parentBloq = utils.getBloqById(this.relations.parent, this.data);
        parentBloq.bloqBody.relations.children = [];
    }
    this.relations.parent = undefined;
};
Bloq.prototype.deleteChild = function(child) {
    var i = 0;
    //remove bloq from connection definition
    if (this.relations.children[child.id] !== undefined && this.relations.children[child.id].connection === 'output') {
        for (i in this.connections.inputs) {
            if (this.connections.inputs[i].bloq !== undefined && this.connections.inputs[i].bloq.id === child.id) {
                this.connections.inputs[i].bloq = undefined;
                break;
            }
        }
    }
    //remove bloq from children
    delete this.relations.children[child.id];
    for (i in this.relations.codeChildren) {
        if (this.relations.codeChildren[i] === child.id) {
            this.relations.codeChildren.splice(i, 1);
            this.decreaseChildrenHeight(child);
            // this.childrenHeight -= child.childrenHeight;
            break;
        }
    }
    delete this.relations.inputChildren[child.id];
};
Bloq.prototype.setChildren = function(childrenId, location, inputID, connectionType) {
    for (var bloqIndex in this.relations.children) {
        if (childrenId === this.relations.children[bloqIndex]) {
            // it exists, do nothing
            return false;
        }
    }
    // if we made it so far, add a new child
    this.relations.children[childrenId] = {
        bloq: utils.getBloqById(childrenId, this.data),
        connection: location,
        inputID: inputID
    };
    for (bloqIndex in this.relations.codeChildren) {
        if (childrenId === this.relations.codeChildren[bloqIndex]) {
            // it exists, do nothing
            return false;
        }
    }
    if (location === 'up' && parseInt(inputID, 10) === 0) {
        this.relations.codeChildren.push(childrenId);
        //Add the height to childrenHeight
        this.increaseChildrenHeight(utils.getBloqById(childrenId, this.data));
        this.resizeParents('down', utils.getBloqById(childrenId, this.data));
    } else if (location === 'up' && parseInt(inputID, 10) === 1) {
        utils.getBloqById(childrenId, this.data).stopSearchingParent = true;
    } else {
        this.relations.inputChildren[childrenId] = {
            bloq: utils.getBloqById(childrenId, this.data),
            id: inputID,
            type: connectionType
        };
    }
    return true;
};
Bloq.prototype.setConnectionType = function(a, b) {
    a.type = b.type;
    // console.log('here', this.connections, this.bloqBody.node);
};
Bloq.prototype.increaseChildrenHeight = function(child) {
    // this.childrenHeight += child.childrenHeight;
    this.childrenHeight += child.childrenHeight;
    if (this.relations.parent !== undefined) {
        utils.getBloqById(this.relations.parent, this.data).increaseChildrenHeight(child);
    }
};
Bloq.prototype.decreaseChildrenHeight = function(child) {
    this.childrenHeight -= child.childrenHeight;
    if (this.relations.parent !== undefined) {
        utils.getBloqById(this.relations.parent, this.data).decreaseChildrenHeight(child);
    }
};
Bloq.prototype.setParent = function(parentId) {
    this.relations.parent = parentId;
    return true;
};
//////******    CODE FUNCTIONS    ******//////
Bloq.prototype.getCode = function(_function) {
    var code = this.code[_function].slice();
    var search = '';
    var replacement = '';
    var id, i;
    for (var k in code) {
        for (i in this.relations.inputChildren) {
            id = this.relations.inputChildren[i].id;
            id = id.substr(id.indexOf('_') + 1, id.length);
            search = '{[' + id + ']}';
            if (this.relations.inputChildren[i].bloq === 'userInput' || this.relations.inputChildren[i].bloq === 'dropdown') {
                replacement = this.relations.inputChildren[i].code;
            } else {
                replacement = this.relations.inputChildren[i].bloq.getCode(_function);
            }
            code[k] = code[k].replace(new RegExp(search, 'g'), replacement);
        }
        for (i = 0; i < this.inputsNumber; i++) {
            search = '{[' + i + ']}';
            code[k] = code[k].replace(new RegExp(search, 'g'), ' ');
        }
        //Connection type replace with correct type:
        for (i in this.relations.inputChildren) {
            if (typeof(this.relations.inputChildren[i].bloq) === typeof({})) {
                search = '{connectionType}';
                replacement = utils.getVariableType[this.relations.inputChildren[i].type];
                console.log('this.relations.inputChildren[i].', this.relations.inputChildren[i]);
                console.log('search , replacement:', search, replacement);
                code[k] = code[k].replace(new RegExp(search, 'g'), replacement);
            }
        }
    }
    return code.join('');
};
Bloq.prototype.getStatementInputCode = function(child, code, _function) {
    code.value += '   ' + child.getCode(_function);
    if (child.relations.codeChildren !== undefined && child.relations.codeChildren.length > 0) {
        var dummy = utils.getBloqById(child.relations.codeChildren, child.data);
        console.log('dummy', dummy);
        child.getStatementInputCode(dummy, code, _function);
    }
};
// Bloq.prototype.on('click', function() {
//     // if (this.label.toLowerCase() != 'loop' && this.label.toLowerCase() != 'setup') {
//     //     // remove other borders
//     //     var canvasChilds = canvas.children();
//     //     $.each(canvasChilds, function(index) {
//     //         if (canvasChilds[index].hasOwnProperty('border')) {
//     //             // hide selection
//     //             canvasChilds[index].selection.hide();
//     //         }
//     //     });
//     //     this.selection.show();
//     // }
// });
// Bloq.prototype.resizeStatementsInput = function() {};
Bloq.prototype.resizeParents = function(direction, child) {
    var parentBloq = this;
    if (parentBloq.stopSearchingParent) {
        return;
    }
    do {
        if (parentBloq.resizeStatementsInput !== undefined) {
            if (direction === 'up') {
                console.log('RESIZING PARENTS:', direction, child.childrenHeight);
                parentBloq.resizeStatementsInput({
                    x: 0,
                    y: -child.childrenHeight
                });
            } else {
                console.log('RESIZING PARENTS:', direction, child.childrenHeight);
                parentBloq.resizeStatementsInput({
                    x: 0,
                    y: child.childrenHeight
                });
            }
        }
        parentBloq = utils.getBloqById(parentBloq.relations.parent, child.data);
        if (parentBloq === null) {
            break;
        }
        if (parentBloq.stopSearchingParent) {
            break;
        }
    } while (parentBloq.relations !== undefined && parentBloq.relations.parent !== undefined);
};
//////******    CONNECTORS    ******//////
/**
 * Updates de position of one connector of a bloq
 * @param connector
 * @param delta
 */
Bloq.prototype.updateConnector = function(connector, delta) {
    connector.connectionPosition.x += delta.x;
    connector.connectionPosition.y += delta.y;
    connector.connectorArea.x1 += delta.x;
    connector.connectorArea.x2 += delta.x;
    connector.connectorArea.y1 += delta.y;
    connector.connectorArea.y2 += delta.y;
    if (connector.UI !== undefined) {
        connector.UI.move(connector.UI.x() + delta.x, connector.UI.y() + delta.y);
    }
    return connector;
};
/**
 * Updates de position of the connectors of a bloq (used after modifying the bloq's position)
 * @param delta
 */
Bloq.prototype.updateConnectors = function(delta) {
    for (var type in this.connections) {
        if (this.connections[type] && type === 'inputs') {
            for (var i in this.connections[type]) {
                this.updateConnector(this.connections[type][i], delta);
            }
        } else if (this.connections[type] && type === 'down' && typeof(this.connections[type]) === typeof([])) {
            for (var j in this.connections[type]) {
                this.updateConnector(this.connections[type][j], delta);
            }
        } else if (this.connections[type]) {
            this.updateConnector(this.connections[type], delta);
        }
    }
};
Bloq.prototype.moveConnector = function(connection, delta) {
    //Move connector
    connection = this.updateConnector(connection, delta);
    //If there is a bloq connected, move the bloq also
    if (connection.bloq !== undefined) {
        var bloqConnected = connection.bloq;
        bloqConnected.move2(delta);
    }
    //Update bloq's size
    this.resize(delta);
};
Bloq.prototype.getConnectionPosition = function(connectionType, bloqToConnect, inputID) {
    if (connectionType === 'up') {
        return {
            x: this.connections[connectionType].connectionPosition.x,
            y: this.connections[connectionType].connectionPosition.y - bloqToConnect.size.height
        };
    }
    if (connectionType === 'output') {
        return {
            x: this.connections[connectionType].connectionPosition.x - bloqToConnect.size.width,
            y: this.connections[connectionType].connectionPosition.y - inputID * connectionThreshold
        };
    }
    if (connectionType === 'inputs') {
        for (var k in this.connections[connectionType]) {
            //If the input is inline and there is not a bloq connected still
            if (this.connections[connectionType][k].inline === true && k === inputID && this.connections[connectionType][k].bloq === undefined) {
                var delta = {
                    x: bloqToConnect.size.width,
                    y: 0
                };
                this.resize(delta);
                for (var i in this.UIElements) {
                    if (this.UIElements[i].id === parseInt(inputID, 10)) {
                        this.pushElements(this.UIElements[i], delta);
                        break;
                    }
                }
            }
        }
        return this.connections[connectionType][inputID].connectionPosition;
    }
    if (connectionType === 'down') {
        return this.connections[connectionType][inputID].connectionPosition;
    }
};
Bloq.prototype.createConnectors = function() {
    this.connections = {};
    if (this.bloqData.inputs) {
        this.connections.inputs = [{}];
        for (var i in this.bloqData.inputs) {
            i = parseInt(i, 10);
            this.connections.inputs[i] = {
                connectionPosition: {},
                connectorArea: {},
                type: ''
            };
            this.connections.inputs[i].connectionPosition = {
                x: this.bloqBody.x() + this.size.width,
                y: this.bloqBody.y() + i * connectionThreshold
            };
            this.connections.inputs[i].connectorArea = {
                x1: this.bloqBody.x() + this.size.width - connectionThreshold,
                x2: this.bloqBody.x() + this.size.width + connectionThreshold,
                y1: this.bloqBody.y() + i * connectionThreshold,
                y2: this.bloqBody.y() + i * connectionThreshold + connectionThreshold
            };
            this.connections.inputs[i].type = this.bloqData.inputs[i];
            this.connections.inputs[i].movedDown = false;
            //Update bloq's size
            this.resize({
                x: 0,
                y: connectionThreshold
            });
            this.connections.inputs[i].UI = this.canvas.group().rect(connectionThreshold * 2, connectionThreshold).attr({
                fill: getRandomColor()
            }).move(this.bloqBody.x() + this.size.width - connectionThreshold, this.bloqBody.y() + i * connectionThreshold);
        }
    }
    if (this.bloqData.output) {
        this.connections.output = {
            connectionPosition: {},
            connectorArea: {},
            type: this.bloqData.output
        };
        this.connections.output.connectionPosition = {
            x: this.bloqBody.x(),
            y: this.bloqBody.y()
        };
        this.connections.output.connectorArea = {
            x1: this.bloqBody.x() - connectionThreshold,
            x2: this.bloqBody.x() + connectionThreshold,
            y1: this.bloqBody.y(),
            y2: this.bloqBody.y() + connectionThreshold
        };
        this.connections.output.UI = this.canvas.group().rect(connectionThreshold * 2, connectionThreshold).attr({
            fill: '#FFCC33'
        }).move(this.bloqBody.x() - connectionThreshold, this.bloqBody.y());
    }
    if (this.bloqData.up) {
        this.connections.up = {
            connectionPosition: {},
            connectorArea: {}
        };
        this.connections.up.connectionPosition = {
            x: this.bloqBody.x(),
            y: this.bloqBody.y()
        };
        this.connections.up.connectorArea = {
            x1: this.bloqBody.x(),
            x2: this.bloqBody.x() + connectionThreshold,
            y1: this.bloqBody.y() - connectionThreshold,
            y2: this.bloqBody.y() + connectionThreshold
        };
        this.connections.up.UI = this.canvas.group().rect(connectionThreshold, connectionThreshold * 2).attr({
            fill: '#FF0000'
        }).move(this.bloqBody.x(), this.bloqBody.y() - connectionThreshold);
    }
    if (this.bloqData.down) {
        this.connections.down = [{}];
        this.connections.down[0].connectionPosition = {
            x: this.bloqBody.x(),
            y: this.bloqBody.y() + this.size.height
        };
        this.connections.down[0].connectorArea = {
            x1: this.bloqBody.x(),
            x2: this.bloqBody.x() + connectionThreshold,
            y1: this.bloqBody.y() + this.size.height - connectionThreshold,
            y2: this.bloqBody.y() + this.size.height + connectionThreshold
        };
        this.connections.down[0].UI = this.canvas.group().rect(connectionThreshold, connectionThreshold * 2).attr({
            fill: '#FF0000'
        }).move(this.bloqBody.x(), this.bloqBody.y() + this.size.height - connectionThreshold);
    }
};
Bloq.prototype.addInput = function(posx, posy, type) {
    var index = 0;
    if (this.connections.inputs !== undefined) {
        index = this.connections.inputs.length;
    } else {
        this.connections.inputs = [{}];
    }
    this.connections.inputs[index] = {
        connectionPosition: {
            x: posx,
            y: posy
        },
        connectorArea: {
            x1: posx - connectionThreshold,
            x2: posx + connectionThreshold,
            y1: posy,
            y2: posy + connectionThreshold
        },
        type: type,
        inline: true,
        movedDown: false
    };
    if (posx !== undefined && posy !== undefined) {
        this.connections.inputs[index].UI = this.canvas.group().rect(connectionThreshold * 2, connectionThreshold).attr({
            fill: getRandomColor()
        }).move(posx - connectionThreshold, posy);
    }
    this.inputsNumber = this.connections.inputs.length;
};
//////******    BLOQ UI    ******//////
/**
 * Resize a bloq and update its down connector, if any
 * @param bloq
 * @param delta
 */
Bloq.prototype.resize = function(delta) {
    this.size.width += delta.x;
    this.size.height += delta.y;
    this.childrenHeight += delta.y;
    if (this.bloqBody.children !== undefined) {
        this.bloqBody.children()[0].size(this.size.width, this.size.height);
    } else {
        this.bloqBody.size(this.size.width, this.size.height);
    }
    // this.border.size(this.size.width, this.size.height);
    // //this.selection.size(this.size.width, this.size.height);
    //update down connector:
    // if (this.connections.down !== undefined) {
    //     this.updateConnector(this.connections.down[0], {
    //         x: 0,
    //         y: delta.y
    //     });
    // }
};
Bloq.prototype.resizeUI = function(bloq) {
    if (this.relations.children[bloq.id].connection === 'output') {
        for (var k in this.connections.inputs) {
            if (this.connections.inputs[k].inline === true && k === this.relations.children[bloq.id].inputID) { //&& bloq.connections[connectionType][k].bloq === undefined) {
                //If the bloq is creating a variable & the value is disconected, set the connection type again to all
                if (this.bloqData.variable !== undefined) {
                    this.setConnectionType(this.connections.inputs[k], {
                        type: 'all'
                    });
                }
                var delta = {
                    x: -bloq.size.width, // - this.size.width,
                    y: 0 //+bloq.size.height - this.size.height
                };
                this.resize(delta);
                delta = {
                    x: -bloq.size.width, //- this.size.width,
                    y: 0
                };
                for (var i in this.UIElements) {
                    if (this.UIElements[i].id === parseInt(k, 10)) {
                        this.pushElements(this.UIElements[i], delta);
                        break;
                    }
                }
            }
        }
    } else if (this.relations.children[bloq.id].connection === 'up' && parseInt(this.relations.children[bloq.id].inputID, 10) === 0) { //upper connection
        //remove child from parent
        this.deleteChild(bloq);
        this.resizeParents('up', bloq);
    }
};
Bloq.prototype.pushElements = function(UIElement, delta) {
    var elements = UIElement.elementsToPush;
    for (var j in elements) {
        elements[j].bloq.x(elements[j].bloq.x() + delta.x);
        elements[j].bloq.y(elements[j].bloq.y() + delta.y);
        var connector = elements[j].connector;
        if (connector !== undefined) {
            this.moveConnector(connector, delta);
        }
    }
};
Bloq.prototype.appendUserInput = function(inputText, type, posx, posy, id) {
    var text = this.bloqBody.foreignObject(100, 100).attr({
        id: 'fobj',
        color: '#FFCC33'
    });
    text.appendChild('input', {
        id: id,
        value: inputText,
        color: '#FFCC33',
    }).move(posx, posy);
    this.UIElements.push({
        element: text,
        elementsToPush: undefined
    });
    var code;
    if (type === 'text') {
        code = '"' + document.getElementById(id).value + '"';
    } else {
        code = document.getElementById(id).value;
    }
    this.relations.inputChildren[id] = {
        id: id,
        bloq: 'userInput',
        code: code
    };
    this.addInput(undefined, undefined, type);
    //Add new variable with the value of the input
    this.addVariable(id, document.getElementById(id).value);
    document.getElementById(id).addEventListener('mousedown', function(e) {
        e.stopPropagation();
    }, false);
    var that = this;
    //Check that the input of the user is the one spected
    document.getElementById(id).addEventListener('change', function() {
        //Add new variable with the value of the input
        that.addVariable(id, document.getElementById(id).value);
        if (type === 'text') {
            that.relations.inputChildren[id].code = '"' + document.getElementById(id).value + '"';
        } else if (type === 'number') {
            if (isNaN(parseFloat(document.getElementById(id).value))) {
                //If type is number and input is not a number, remove user input.
                //ToDo : UX warning!
                document.getElementById(id).value = '';
            } else {
                that.relations.inputChildren[id].code = document.getElementById(id).value;
            }
        } else {
            that.relations.inputChildren[id].code = document.getElementById(id).value;
        }
    }, false);
};
Bloq.prototype.setUserInput = function(ID, text) {
    document.getElementById(this.id + '_' + ID).value = text;
};
Bloq.prototype.appendDropdownInput = function(dropdownText, type, posx, posy, id) {
    var dropdown = this.bloqBody.foreignObject(100, 100).attr({
        id: id,
        color: '#FFCC33'
    });
    var newList = this.populateDropDownList(dropdownText);
    this.addInput(undefined, undefined, type);
    //Append the list to dropdown foreignobject:
    dropdown.appendChild(newList).move(posx, posy);
    this.UIElements.push({
        element: dropdown,
        elementsToPush: undefined
    });
    this.relations.inputChildren[id] = {
        id: id,
        bloq: 'userInput',
        code: newList.value
    };
    this.dropdownInput = id;
    var that = this;
    newList.onchange = function() {
        that.relations.inputChildren[id].code = newList.value;
    };
    document.getElementById(id).addEventListener('mousedown', function(e) {
        e.stopPropagation();
    }, false);
};
Bloq.prototype.populateDropDownList = function(dropdownText) {
    var newList = document.createElement('select');
    for (var i in dropdownText) {
        var newListData = new Option(dropdownText[i].label, dropdownText[i].value);
        //Here we append that text node to our drop down list.
        newList.appendChild(newListData);
    }
    return newList;
};
Bloq.prototype.appendBloqInput = function(inputText, type, posx, posy, inputID) {
    //draw white (ToDo: UX) rectangle
    var bloqInput = utils.getOutputBloq(this.bloqBody, posx, this.bloqInput.width, this.bloqInput.height);
    this.addInput(this.bloqBody.x() + posx, this.bloqBody.y() + posy, type); //bloq.x()+posx + width, bloq.x()+posy + i * connectionThreshold);
    this.bloqBody.add(bloqInput);
    this.UIElements.push({
        element: bloqInput,
        elementsToPush: undefined,
        id: inputID,
        connector: this.connections.inputs[this.connections.inputs.length - 1]
    });
};
Bloq.prototype.createBloqUI = function() {
    var margin = 10;
    var posx = 20 + margin;
    var width = 0;
    var posy = margin;
    var inputID = 0;
    this.UIElements = [{}];
    var i = 0;
    var j = 0;
    for (j in this.bloqData.text) {
        for (i in this.bloqData.text[j]) {
            if (typeof(this.bloqData.text[j][i]) === typeof({})) {
                if (this.bloqData.text[j][i].input === 'userInput') {
                    this.appendUserInput(this.bloqData.text[j][i].label, this.bloqData.text[j][i].type, posx, posy, this.id + '_' + inputID);
                    inputID += 1;
                    posx += 110;
                } else if (this.bloqData.text[j][i].input === 'bloqInput') {
                    this.appendBloqInput(this.bloqData.text[j][i].label, this.bloqData.text[j][i].type, posx, posy - margin, inputID);
                    inputID += 1;
                    posx += 110;
                } else if (this.bloqData.text[j][i].input === 'dropdown') {
                    this.appendDropdownInput(this.bloqData.text[j][i].data, this.bloqData.text[j][i].type, posx, posy, this.id + '_' + inputID);
                    inputID += 1;
                    posx += 110;
                }
            } else {
                var text = this.bloqBody.text(this.bloqData.text[j][i]).font({
                    family: 'Helvetica',
                    fill: '#000',
                    size: 14
                }).move(posx, posy);
                posx += this.bloqData.text[j][i].length * 5 + 30;
                this.UIElements.push({
                    element: text,
                    elementsToPush: undefined
                });
            }
        }
        if (posx > width) {
            width = posx;
        }
        posx = margin;
        posy += 40;
    }
    this.UIElements.shift();
    //Add the elements that must be pushed
    for (i in this.UIElements) {
        this.UIElements[i].elementsToPush = [{}];
        for (j in this.UIElements) {
            if (j > i) {
                this.UIElements[i].elementsToPush.push({
                    bloq: this.UIElements[j].element,
                    connector: this.UIElements[j].connector
                });
            }
        }
        this.UIElements[i].elementsToPush.shift();
    }
    //Update bloq's size
    this.resize({
        x: width - this.size.width,
        y: posy - this.size.height
    });
};
//////******    MOVE BLOQS    ******//////
Bloq.prototype.moveTo = function(location) {
    // console.log('location:', location.x, location.y);
    // console.log('location init:', this.bloqBody.x(), this.bloqBody.y());
    var init = {
        x: this.bloqBody.x(),
        y: this.bloqBody.y()
    };
    this.bloqBody.x(location.x);
    this.bloqBody.y(location.y);
    // console.log('location final:', this.bloqBody.x(), this.bloqBody.y());
    var delta = {
        x: 0,
        y: 0
    };
    delta.x = this.bloqBody.x() - init.x;
    delta.y = this.bloqBody.y() - init.y;
    // console.log('delta:', delta);
    this.updateConnectors(delta);
    this.moveChildren(delta);
};
Bloq.prototype.move2 = function(delta, moveChildren) {
    this.bloqBody.x(this.bloqBody.x() + delta.x);
    this.bloqBody.y(this.bloqBody.y() + delta.y);
    this.updateConnectors(delta);
    if (moveChildren) {
        this.moveChildren(delta);
    }
};
Bloq.prototype.moveChildren = function(delta) {
    for (var i in this.relations.children) {
        var child = this.relations.children[i].bloq;
        child.move2(delta);
        if (child.relations !== undefined && child.relations.children !== undefined) {
            child.moveChildren(delta);
        }
    }
};
Bloq.prototype.updateDeltas = function(a) {
    //Update the deltaX and deltaY movements
    this.delta.x = a.x - this.delta.lastx;
    this.delta.y = a.y - this.delta.lasty;
    //Update the lastx and lasty variables
    this.delta.lastx = a.x;
    this.delta.lasty = a.y;
};
Bloq.prototype.resetLastDelta = function() {
    this.delta.lastx = 0;
    this.delta.lasty = 0;
};

// Source: src/outputBloq.js
/* global Bloq */
//----------------------------------------------------------------//
// This file is part of the bloqs Project                         //
//                                                                //
// Date: March 2015                                               //
// Author: Irene Sanz Nieto  <irene.sanz@bq.com>                  //
//----------------------------------------------------------------//
function OutputBloq(bloqData, position, data) {
    Bloq.call(this, bloqData, position, data);
    /**
     * Set this bloq as draggable
     */
    this.bloqBody.draggable();
    //Add the connector to the bloq's UI:
    var path = 'm 36,32 c -4.418,0 -8,-2.582 -8,-7 0,-4.418 3.582,-7 8,-7 l 0,14 z';
    this.bloqBody.connector = this.bloqBody.path(path).fill('#cccccc'); //.move(posx, posy);
    this.bloqBody.connector.x(-8);
    this.bloqBody.add(this.bloqBody.connector);
}
OutputBloq.prototype = Object.create(Bloq.prototype);

// Source: src/statementBloq.js
/* global Bloq */
//----------------------------------------------------------------//
// This file is part of the bloqs Project                         //
//                                                                //
// Date: March 2015                                               //
// Author: Irene Sanz Nieto  <irene.sanz@bq.com>                  //
//----------------------------------------------------------------//
var StatementBloq = function(bloqData, position, data) {
    Bloq.call(this, bloqData, position, data);
    /**
     * Set this bloq as draggable
     */
    this.bloqBody.draggable();
    this.bloqBody.dragmove = StatementBloq.prototype.dragmove;
};
StatementBloq.prototype = Object.create(Bloq.prototype);

// Source: src/statementInputBloq.js
/* global Bloq, utils, connectionThreshold, getRandomColor */
//----------------------------------------------------------------//
// This file is part of the bloqs Project                         //
//                                                                //
// Date: March 2015                                               //
// Author: Irene Sanz Nieto  <irene.sanz@bq.com>                  //
//----------------------------------------------------------------//
function StatementInputBloq(bloqData, position, data, draggable) {
    Bloq.call(this, bloqData, position, data);
    if (draggable) {
        this.bloqBody.draggable();
    }
    this.statementInputCode = '';
    //Down connector x position : +20 px
    this.updateConnector(this.connections.down[0], {
        x: 20,
        y: 0
    });
    this.relations.codeStatementChildren = {};
    //Add bloq's left and down UI parts
    this.bloqBody.downPart = this.bloqBody.rect(this.size.width, 20).fill('#00CC00').radius(4);
    this.bloqBody.downPart.y(80 - 20);
    this.bloqBody.add(this.bloqBody.downPart);
    this.bloqBody.leftPart = this.bloqBody.rect(20, 80).fill('#00CC00').radius(4);
    this.bloqBody.leftPart.size.height = 80;
    this.bloqBody.leftPart.size.width = 20;
    this.bloqBody.add(this.bloqBody.leftPart);
    // Update size:
    this.size = {
        width: this.bloqBody.bbox().width,
        height: this.bloqBody.bbox().height
    };

    this.childrenHeight = this.size.height;
    //Define bloqlabel and add the label on the bloq
    this.label = bloqData.label;
    if (bloqData.statementInput) {
        this.addDownConnector(this.bloqBody.x(), this.bloqBody.leftPart.size.height + this.bloqBody.y());
    }
}
StatementInputBloq.prototype = Object.create(Bloq.prototype);
/**
 * Resize a statements input bloq
 * @param delta
 */
StatementInputBloq.prototype.resizeStatementsInput = function(delta) {
    // this.bloqBody.leftPart.size.height += delta.y;
    this.bloqBody.leftPart.height(this.bloqBody.leftPart.size.height);
    this.bloqBody.downPart.move(0, this.bloqBody.downPart.y() + delta.y);
    var diff = this.bloqBody.downPart.y() - this.bloqBody.leftPart.y() + 20;
    this.bloqBody.leftPart.height(diff);
    this.size.height += delta.y;
    //update down connector:
    if (this.connections.down !== undefined && this.connections.down[1] !== undefined) {
        this.moveConnector(this.connections.down[1], {
            x: 0,
            y: delta.y
        });
    }
    // this.moveChildren(delta);
};
StatementInputBloq.prototype.moveConnector = function(connection, delta) {
    //Move connector
    connection = this.updateConnector(connection, delta);
    //If there is a bloq connected, move the bloq also
    if (connection.bloq !== undefined) {
        var bloqConnected = connection.bloq;
        bloqConnected.move2(delta, true);
    }
};
// StatementInputBloq.prototype.getConnectionPosition = function(connectionType, bloqToConnect, inputID) {
//     return {
//         x: this.connections[connectionType][inputID].connectionPosition.x,
//         y: this.connections[connectionType][inputID].connectionPosition.y
//     };
// };
StatementInputBloq.prototype.addDownConnector = function(posx, posy) {
    var index = 0;
    if (this.connections.down !== undefined) {
        index = this.connections.down.length;
    } else {
        this.connections.down = [{}];
    }
    this.connections.down[index] = {
        connectionPosition: {
            x: posx,
            y: posy
        },
        connectorArea: {
            x1: posx,
            x2: posx + connectionThreshold,
            y1: posy - connectionThreshold,
            y2: posy + connectionThreshold
        }
    };
    if (posx !== undefined && posy !== undefined) {
        this.connections.down[index].UI = this.canvas.group().rect(connectionThreshold, connectionThreshold * 2).attr({
            fill: getRandomColor()
        }).move(posx, posy - connectionThreshold);
    }
};
StatementInputBloq.prototype.setChildren = function(childrenId, location, inputID) {
    for (var bloqIndex in this.relations.children) {
        if (childrenId === this.relations.children[bloqIndex]) {
            // it exists, do nothing
            return false;
        }
    }
    // if we made it so far, add a new child
    this.relations.children[childrenId] = {
        bloq: utils.getBloqById(childrenId, this.data),
        connection: location,
        inputID: inputID
    };
    for (bloqIndex in this.relations.codeChildren) {
        if (childrenId === this.relations.codeChildren[bloqIndex]) {
            // it exists, do nothing
            return false;
        }
    }
    if (location === 'up' && parseInt(inputID, 10) === 0) {
        this.relations.codeStatementChildren = utils.getBloqById(childrenId, this.data);
        // this.relations.inputChildren[childrenId] = {
        //     bloq: utils.getBloqById(childrenId, this.data),
        //     id: 'StatementInput'
        // };
        //Add the height to childrenHeight
        this.increaseChildrenHeight(utils.getBloqById(childrenId, this.data));
        this.resizeParents('down', utils.getBloqById(childrenId, this.data));
    } else if (location === 'up' && parseInt(inputID, 10) === 1) {
        this.relations.codeChildren.push(childrenId);
        utils.getBloqById(childrenId, this.data).stopSearchingParent = true;
    } else {
        this.relations.inputChildren[childrenId] = {
            bloq: utils.getBloqById(childrenId, this.data),
            id: inputID
        };
    }
    return true;
};
StatementInputBloq.prototype.isNotEmpty = function(obj) {
    return !StatementInputBloq.prototype.isEmpty(obj);
};
StatementInputBloq.prototype.isEmpty = function(obj) {

    // null and undefined are "empty"
    if (obj === null) {
        return true;
    }

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0) {
        return false;
    }
    if (obj.length === 0) {
        return true;
    }

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;

};
StatementInputBloq.prototype.deleteChild = function(child) {
    var i = 0;
    //remove bloq from connection definition
    if (this.relations.children[child.id] !== undefined && this.relations.children[child.id].connection === 'output') {
        for (i in this.connections.inputs) {
            if (this.connections.inputs[i].bloq !== undefined && this.connections.inputs[i].bloq.id === child.id) {
                this.connections.inputs[i].bloq = undefined;
                break;
            }
        }
    }
    //remove bloq from children
    delete this.relations.children[child.id];
    for (i in this.relations.codeChildren) {
        if (this.relations.codeChildren[i] === child.id) {
            this.relations.codeChildren.splice(i, 1);
            this.decreaseChildrenHeight(child);
            // this.childrenHeight -= child.childrenHeight;
            break;
        }
    }
    delete this.relations.inputChildren[child.id];
    //remove codeStatementChildren
    console.log('this.isNotEmpty(this.relations.codeStatementChildren) ', this.isNotEmpty(this.relations.codeStatementChildren));
    if (this.isNotEmpty(this.relations.codeStatementChildren) && child.id === this.relations.codeStatementChildren.id) {
        this.relations.codeStatementChildren = {};
    }
};
//////******    CODE FUNCTIONS    ******//////
StatementInputBloq.prototype.getCode = function(_function) {
    var code = this.code[_function].slice();
    var search = '';
    var replacement = '';
    var id;
    for (var k in code) {
        //Replace all inputs tags {x} with the getCode value of the bloqs connected to them
        for (var i in this.relations.inputChildren) {
            id = this.relations.inputChildren[i].id;
            id = id.substr(id.indexOf('_') + 1, id.length);
            search = '{[' + id + ']}';
            if (this.relations.inputChildren[i].bloq === 'userInput' || this.relations.inputChildren[i].bloq === 'dropdown') {
                replacement = this.relations.inputChildren[i].code;
            } else {
                replacement = this.relations.inputChildren[i].bloq.getCode(_function);
            }
            code[k] = code[k].replace(new RegExp(search, 'g'), replacement);
        }
        //Replace all missing inputs with ''
        for (i = 0; i < this.inputsNumber; i++) {
            search = '{[' + i + ']}';
            code[k] = code[k].replace(new RegExp(search, 'g'), ' ');
        }
        //Replace the statment input tag with the contents of the codeStatementChildren
        search = '{StatementInput}';
        var dummy = {
            value: ''
        };
        var child = this.relations.codeStatementChildren;
        if (this.isNotEmpty(child)) {
            this.getStatementInputCode(child, dummy, _function);
        }
        replacement = dummy.value;
        code[k] = code[k].replace(new RegExp(search, 'g'), replacement);
    }
    return code.join('');
};

/**
 * Resize a bloq and update its down connector, if any
 * @param bloq
 * @param delta
 */
StatementInputBloq.prototype.resize = function(delta) {
    this.size.width += delta.x;
    this.size.height += delta.y;
    this.childrenHeight += delta.y;
    if (this.bloqBody.children !== undefined) {
        this.bloqBody.children()[0].size(this.body.width() + delta.x, this.body.height() + delta.y);
    } else {
        this.bloqBody.size(this.body.width() + delta.x, this.body.height() + delta.y);
    }
};

// Source: src/projectBloq.js
/* global Bloq */
//----------------------------------------------------------------//
// This file is part of the bloqs Project                         //
//                                                                //
// Date: March 2015                                               //
// Author: Irene Sanz Nieto  <irene.sanz@bq.com>                  //
//----------------------------------------------------------------//
function ProjectBloq(bloqData, position, data) {
    Bloq.call(this, bloqData, position, data, false);
    this.bloqBody.text(bloqData.label.toUpperCase()).font({
        family: 'Helvetica',
        fill: '#fff',
        size: 14
    }).move(20, 5);
}
ProjectBloq.prototype = Object.create(Bloq.prototype);

// Source: res/basic_bloqs.js
/*jshint unused:false*/
/**
 * Created by jesus on 30/03/15.
 */
var getProjectBloqs = function() {
    var data = {
        setup: {
            label: 'setup',
            down: true,
            color: '#000',
            code: {
                setup: '',
                loop: 'void setup (){\n'
            }
        },
        loop: {
            label: 'loop',
            down: true,
            color: '#000',
            code: {
                setup: '',
                loop: 'void loop (){\n'
            }
        }
    };
    return data;
};
var getBasicBloqs = function(variables) {
    var data = {
        led: {
            label: 'led',
            up: true,
            down: true,
            color: '#e2e2e2',
            text: [
                [{
                    input: 'dropdown',
                    type: 'text',
                    data: [{
                        label: 'Encender',
                        value: 'HIGH'
                    }, {
                        label: 'Apagar',
                        value: 'LOW'
                    }]
                }, 'el LED', {
                    input: 'dropdown',
                    type: 'text',
                    data: [{
                        label: 'LED1',
                        value: 'LED1'
                    }, {
                        label: 'LED2',
                        value: 'LED2'
                    }]
                }]
            ],
            code: {
                setup: ['digitalWrite({1},{0});\n'],
                loop: ['digitalWrite({1},{0});\n']
            }
        },
        readSensor: {
            label: 'readSensor',
            output: 'number',
            color: '#e2e2e2',
            text: [
                ['Leer', {
                    input: 'dropdown',
                    type: 'text',
                    data: [{
                        label: 'Sensor1',
                        value: 'Sensor1'
                    }, {
                        label: 'Sensor2',
                        value: 'Sensor2'
                    }]
                }]
            ],
            code: {
                setup: ['digitalRead({0})'],
                loop: ['digitalRead({0})']
            }
        },
        buzzer: {
            label: 'buzzer',
            up: true,
            down: true,
            color: '#e2e2e2',
            text: [
                ['Sonar el buzzer', {
                    input: 'dropdown',
                    type: 'text',
                    data: [{
                        label: 'Buzzer1',
                        value: 'Buzzer1'
                    }, {
                        label: 'Buzzer2',
                        value: 'Buzzer2'
                    }]
                }, 'con la nota', {
                    input: 'dropdown',
                    type: 'text',
                    data: [{
                        label: 'Do',
                        value: '200'
                    }, {
                        label: 'Re',
                        value: '300'
                    }]
                }, 'durante', {
                    input: 'userInput',
                    type: 'number',
                    label: '0'
                }, 'ms']
            ],
            code: {
                setup: ['tone({0},{1},{2});', 'delay({2});\n'],
                loop: ['tone({0},{1},{2});', 'delay({2});\n']
            }
        },
        forLoop: {
            label: 'forLoop',
            up: true,
            down: true,
            statementInput: true,
            color: '#e2e2e2',
            text: [
                ['Contar con', {
                    input: 'bloqInput',
                    type: 'number',
                    label: 'INPUT'
                }, 'desde', {
                    input: 'bloqInput',
                    type: 'number',
                    label: 'INPUT'
                }, 'hasta', {
                    input: 'bloqInput',
                    type: 'number',
                    label: 'INPUT'
                }, {
                    input: 'dropdown',
                    type: 'text',
                    data: [{
                        label: 'sumando',
                        value: '++'
                    }, {
                        label: 'restando',
                        value: '--'
                    }]
                }]
            ],
            code: {
                setup: ['for({0};{1};{2}){\n', '{StatementInput}', '\n'],
                loop: ['for({0}={1};{0}<{2};{0}{3}){\n', '{StatementInput}', '\n']
            }
        },
        number: {
            label: 'number',
            output: 'number',
            color: '#e2e2e2',
            text: [
                [{
                    input: 'userInput',
                    type: 'number',
                    label: '0'
                }]
            ],
            code: {
                setup: ['{0}'],
                loop: ['{0}']
            }
        },
        text: {
            label: 'text',
            output: 'text',
            color: '#e2e2e2',
            text: [
                [{
                    input: 'userInput',
                    type: 'text',
                    label: ''
                }]
            ],
            code: {
                setup: ['{0}'],
                loop: ['{0}']
            }
        },
        getVariable: {
            label: 'getVariable',
            output: 'number',
            color: '#e2e2e2',
            text: [
                ['Var', {
                    input: 'dropdown',
                    type: 'text',
                    data: variables
                }]
            ],
            code: {
                setup: ['{0}'],
                loop: ['{0}']
            },
            getVariable: true
        },
        newGlobalVar: {
            label: 'newGlobalVar',
            up: 'true',
            down: 'true',
            color: '#e2e2e2',
            text: [
                [{
                    input: 'userInput',
                    type: 'variable',
                    label: 'varName'
                }, '=', {
                    input: 'bloqInput',
                    type: 'all',
                    label: 'INPUT'
                }]
            ],
            code: {
                setup: ['{connectionType} {0} = {1};\n'],
                loop: ['{connectionType} {0} = {1};\n']
            },
            variable: 'global'
        }
    };
    return data;
};

// Source: src/build/default.js
/* global define, module, require, window */
/* global utils, StatementInputBloq, OutputBloq, ProjectBloq, StatementBloq, getBasicBloqs, getProjectBloqs, SVG */
//----------------------------------------------------------------//
// This file is part of the bloqs Project                         //
//                                                                //
// Date: March 2015                                               //
// Author: Irene Sanz Nieto  <irene.sanz@bq.com>                  //
//----------------------------------------------------------------//
// @include ../utils.js
// @include ../bloq.js
// @include ../outputBloq.js
// @include ../statementBloq.js
// @include ../statementInputBloq.js
// @include ../projectBloq.js
// @include ../../res/basic_bloqs.js
(function(factory, root) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery')); // Node
    } else {
        factory(root, root.$); // Browser global
    }
})
(function(root, $) {
    var data = {
        bloqs: [],
        element: '',
        canvas: null,
        code: {
            setup: '',
            loop: ''
        },
        variables: [],
        globalVariables: [],
        localVariables: [],
        project: []
    };
    var field = {};
    var canvas = {};
    data.createCanvas = function(element) {
        if ($.isEmptyObject(canvas)) {
            data.element = element;
            field = SVG(element).size('100%', '100%');
            canvas = field.group().attr('class', 'bloqs-canvas');
        }
        //LISTEN TO GLOBAL ONCHANGE
        // document.getElementById(element).addEventListener('change', function() {
        // }, false);
        data.canvas = canvas;
    };
    data.bloqsToCode = function() {
        data.functionCode(data.bloqs.setup, 'setup');
        data.functionCode(data.bloqs.loop, 'loop');
        return data.code.setup + data.code.loop;
    };
    data.functionCode = function(bloq, _function) {
        if (bloq === data.bloqs.loop || bloq === data.bloqs.setup) {
            data.code[_function] = bloq.code.loop;
        } else {
            data.code[_function] += '   ' + bloq.getCode(_function);
        }
        if (bloq.relations.codeChildren.length > 0) {
            data.functionCode(utils.getBloqById(bloq.relations.codeChildren, data), _function);
        } else {
            data.code[_function] += '\n}\n';
        }
    };
    /**
     * Create a bloq and setup its properties and events.
     *
     * @param bloqData bloq object
     * @param canvas element to create the bloq into
     * @param position x,y position (just useful for the demo version)
     *
     * @returns Object bloq
     */
    data.createBloq = function(bloqData, position) {
        var bloq;
        if (bloqData.hasOwnProperty('statementInput')) {
            bloq = new StatementInputBloq(bloqData, position, data, true);
        } else if (bloqData.hasOwnProperty('output')) {
            bloq = new OutputBloq(bloqData, position, data);
        } else if (bloqData.label === 'loop') {
            bloq = new ProjectBloq(bloqData, position, data);
            data.bloqs.loop = bloq;
        } else if (bloqData.label === 'setup') {
            bloq = new ProjectBloq(bloqData, position, data);
            data.bloqs.setup = bloq;
        } else {
            bloq = new StatementBloq(bloqData, position, data);
        }
        data.bloqs.push(bloq);
        return bloq;
    };
    data.getBloq = function(bloqName, position) {
        return data.createBloq(getBasicBloqs(data.variables)[bloqName], position);
    };
    /**
     * Create a set of bloqs and setup its properties and events.
     *
     * @param path path to the set of JSON files defining the bloqs
     *
     * @returns array of Object bloq
     */
    data.createProjectStructure = function() {
        var bloqTypes = getProjectBloqs();
        var counter = 100;
        for (var i in bloqTypes) {
            data.bloqs.push(this.createBloq(bloqTypes[i], [50, counter], data));
            counter += 100;
        }
        // this.createMenu();
    };
    data.createMenu = function() {
        var bloqTypes = getBasicBloqs();
        var counter = 20;
        for (var i in bloqTypes) {
            data.bloqs.push(this.createBloq(bloqTypes[i], [50, counter]));
            counter += 100;
        }
    };
    data.saveProject = function() {
        data.saveChildBloqs(data.bloqs.loop);
        console.log('savingproject:', JSON.stringify(data.project));
        data.project = [];
    };
    data.saveChildBloqs = function(bloq) {
        var bloqDescription = [];
        if (bloq !== null) {
            if (bloq.relations !== undefined) {
                bloqDescription = this.getBloqData(bloq);
                data.project.push(bloqDescription);
                if (bloq.relations.codeChildren !== undefined) {
                    var codeChild = utils.getBloqById(bloq.relations.codeChildren[0], this);
                    this.saveChildBloqs(codeChild, data.project);
                }
            }
        }
    };
    data.getBloqData = function(bloq) {
        var bloqDescription = [];
        if (bloq.relations.inputChildren !== undefined) {
            for (var i in bloq.relations.inputChildren) {
                if (bloq.relations.inputChildren[i].bloq === 'userInput') {
                    bloqDescription.push({
                        userInput: bloq.relations.inputChildren[i].code
                    });
                }
                if (bloq.relations.inputChildren[i].bloq === 'dropdown') {
                    bloqDescription.push({
                        dropdown: bloq.relations.inputChildren[i].code
                    });
                }
                if (bloq.relations.inputChildren[i].bloq !== undefined && bloq.relations.inputChildren[i].bloq.bloqName !== undefined) {
                    var child = bloq.relations.inputChildren[i].bloq;
                    if (child.relations.inputChildren !== undefined) {
                        console.log('this.getBloqData(child)', this.getBloqData(child));
                        bloqDescription.push(this.getBloqData(child));
                    } else {
                        bloqDescription.push({
                            bloq: bloq.relations.inputChildren[i].bloq.bloqName,
                            location: [bloq.relations.inputChildren[i].bloq.bloqBody.x(), bloq.relations.inputChildren[i].bloq.bloqBody.y()]
                        });
                    }
                }
            }
        }
        return {
            bloq: bloq.bloqName,
            inputs: bloqDescription,
            location: [bloq.bloqBody.x(), bloq.bloqBody.y()]
        };
    };
    data.loadProject = function(project) {
        console.log('project_JSON', project);
        var bloq;
        for (var i in project) {
            if (project[i].bloq !== undefined && project[i].bloq !== 'loop' && project[i].bloq !== 'setup') {
                bloq = this.getBloq(project[i].bloq, project[i].location);
                this.loadChildBloqs(project[i], bloq);
            }
        }
    };
    data.loadChildBloqs = function(projectBloq, bloq) {
        console.log('projectBloq', projectBloq);
        if (projectBloq.inputs.length > 0) {
            for (var i in projectBloq.inputs) {
                if (projectBloq.inputs[i] !== undefined) {
                    if (projectBloq.inputs[i].bloq !== undefined) {
                        console.log('projectBloq.inputs[i].bloq', projectBloq.inputs[i].bloq);
                        this.loadChildBloqs(projectBloq.inputs[i], this.getBloq(projectBloq.inputs[i].bloq, projectBloq.inputs[i].location));
                    }
                    if (projectBloq.inputs[i].userInput !== undefined) {
                        bloq.setUserInput(i, projectBloq.inputs[i].userInput);
                    }
                    //else set the dropdown & userinput values!! :)
                }
            }
        }
    };
    // Base function.
    var Bloqs = function() {
        return data;
    };
    // Export to the root, which is probably `window`.
    root.Bloqs = Bloqs;
}, window);
