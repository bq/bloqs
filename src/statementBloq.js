//----------------------------------------------------------------//
// This file is part of the bloqs Project                         //
//                                                                //
// Date: March 2015                                               //
// Author: Irene Sanz Nieto  <irene.sanz@bq.com>                  //
//----------------------------------------------------------------//
var StatementBloq = function(bloqData, canvas, position, data) {
    Bloq.call(this, bloqData, canvas, position, data);
    /**
     * Set this bloq as draggable
     */
    this.bloqBody.draggable();
    this.bloqBody.dragmove = StatementBloq.prototype.dragmove;
};
StatementBloq.prototype = Object.create(Bloq.prototype);
StatementBloq.prototype.getConnectionPosition = function(connectionType, bloqToConnect, inputID) {
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
                delta = {
                    x: bloqToConnect.size.width,
                    y: 0
                };
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
        bloqToConnect.resizeParents('down');
    }
    return this.connections[connectionType].connectionPosition;
};
// StatementBloq.prototype.resizeUI = function(a) {};
//---------------------------------------------------------------------------
// // remove parent of this and child in parent:
//     var parentBloq = utils.getBloqById(this.relations.parent, this.data);
//     if (parentBloq.bloqBody.relations.children[this.getBloqObject().id].connection === 'up') {
//         console.log('resizing parents in StatementBloq', this.getBloqObject().childrenHeight);
//         this.getBloqObject().resizeParents('up');
//     } else if (parentBloq.bloqBody.relations.children[this.getBloqObject().id].connection === 'output') {
//         for (var k in parentBloq.bloqBody.connections.inputs) {
//             if (parentBloq.bloqBody.connections.inputs[k].inline === true && k === parentBloq.bloqBody.relations.children[this.getBloqObject().id].inputID) { //&& bloq.connections[connectionType][k].bloq === undefined) {
//                 var delta = {
//                     x: +this.getBloqObject().size.width - parentBloq.size.width,
//                     y: +this.getBloqObject().size.height - parentBloq.size.height
//                 };
//                 parentBloq.resize(delta);
//                 delta = {
//                     x: this.getBloqObject().size.width - parentBloq.size.width,
//                     y: 0
//                 };
//                 for (var i in parentBloq.UIElements) {
//                     if (parentBloq.UIElements[i].id === parseInt(k, 10)) {
//                         utils.pushElements(parentBloq, parentBloq.UIElements[i], delta);
//                         break;
//                     }
//                 }
//             }
//         }
//     }
/**
 * We start dragging
 */
// bloq.dragmove = function(a) {
//     bloq.dragmoveFlag = true;
//     // remove parent of this and child in parent:
//     if (bloq.relations.parent !== undefined) {
//         //move dragged bloq on top
//         utils.bloqOnTop(bloq);
//         var parentBloq = bloq.getBloqById(bloq.relations.parent);
//         if (parentBloq.relations.children[bloq.id()].connection === 'up') {
//             bloq.resizeParents('up');
//         } else if (parentBloq.relations.children[bloq.id()].connection === 'output') {
//             for (var k in parentBloq.connections.inputs) {
//                 if (parentBloq.connections.inputs[k].inline === true && k === parentBloq.relations.children[bloq.id()].inputID) { //&& bloq.connections[connectionType][k].bloq === undefined) {
//                     var delta = {
//                         x: -bloq.size.width + parentBloq.bloqInput.width,
//                         y: -bloq.size.height + parentBloq.bloqInput.height
//                     };
//                     parentBloq.resize(delta);
//                     delta = {
//                         x: -bloq.size.width + parentBloq.bloqInput.width,
//                         y: 0
//                     };
//                     for (var i in parentBloq.UIElements) {
//                         if (parentBloq.UIElements[i].id === parseInt(k, 10)) {
//                             utils.pushElements(parentBloq, parentBloq.UIElements[i], delta);
//                             break;
//                         }
//                     }
//                 }
//             }
//         }
//         parentBloq.deleteChild(bloq);
//         bloq.deleteParent(false);
//     }
//     //Update the deltaX and deltaY movements
//     bloq.delta.x = a.x - bloq.delta.lastx;
//     bloq.delta.y = a.y - bloq.delta.lasty;
//     //Update the lastx and lasty variables
//     bloq.delta.lastx = a.x;
//     bloq.delta.lasty = a.y;
//     //Update the bloq's connectors using the new deltas
//     bloq.connections = this.updateConnectors(bloq, bloq.delta);
//     // move child bloqs along with this one
//     utils.moveChildren(bloq, bloq.delta);
// };