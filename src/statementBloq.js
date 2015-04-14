/* global Bloq */
//----------------------------------------------------------------//
// This file is part of the bloqs Project                         //
//                                                                //
// Date: March 2015                                               //
// Author: Irene Sanz Nieto  <irene.sanz@bq.com>                  //
//----------------------------------------------------------------//
'use strict';
var StatementBloq = function(bloqData, position, data) {
    Bloq.call(this, bloqData, position, data);
    /**
     * Set this bloq as draggable
     */
    this.bloqBody.draggable();
    this.bloqBody.dragmove = StatementBloq.prototype.dragmove;
};
StatementBloq.prototype = Object.create(Bloq.prototype);
