/* global Bloq */
//----------------------------------------------------------------//
// This file is part of the bloqs Project                         //
//                                                                //
// Date: March 2015                                               //
// Author: Irene Sanz Nieto  <irene.sanz@bq.com>                  //
//----------------------------------------------------------------//
'use strict';

function OutputBloq(bloqData, position, data) {
    Bloq.call(this, bloqData, position, data);
    /**
     * Set this bloq as draggable
     */
    this.bloqBody.draggable();
    //Add the connector to the bloq's UI:
    var path = 'm 36,32 c -4.418,0 -8,-2.582 -8,-7 0,-4.418 3.582,-7 8,-7 l 0,14 z';
    this.bloqBody.connector = this.bloqBody.path(path).fill('#ebebeb'); //.move(posx, posy);
    this.bloqBody.connector.x(-8);
    this.bloqBody.add(this.bloqBody.connector);
}
OutputBloq.prototype = Object.create(Bloq.prototype);
