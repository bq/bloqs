/* global utils, connectionThreshold, getRandomColor, document, Option */
//----------------------------------------------------------------//
// This file is part of the bloqs Project                         //
//                                                                //
// Date: March 2015                                               //
// Author: Irene Sanz Nieto  <irene.sanz@bq.com>                  //
//----------------------------------------------------------------//
'use strict';

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
