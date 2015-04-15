/* global Bloq, utils, connectionThreshold, getRandomColor */
//----------------------------------------------------------------//
// This file is part of the bloqs Project                         //
//                                                                //
// Date: March 2015                                               //
// Author: Irene Sanz Nieto  <irene.sanz@bq.com>                  //
//----------------------------------------------------------------//
'use strict';

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
    this.bloqBody.downPart = this.bloqBody.rect(this.size.width, 20).fill('#ebebeb').radius(4);
    this.bloqBody.downPart.y(80);
    this.bloqBody.add(this.bloqBody.downPart);
    this.bloqBody.leftPart = this.bloqBody.rect(20, 80).size(20, 90).fill('#ebebeb').radius(4);
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
            fill: getRandomColor(),
            'fill-opacity': 0
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
