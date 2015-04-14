/* global Bloq */
//----------------------------------------------------------------//
// This file is part of the bloqs Project                         //
//                                                                //
// Date: March 2015                                               //
// Author: Irene Sanz Nieto  <irene.sanz@bq.com>                  //
//----------------------------------------------------------------//
'use strict';

function ProjectBloq(bloqData, position, data) {
    Bloq.call(this, bloqData, position, data, false);
    this.bloqBody.text(bloqData.label.toUpperCase()).font({
        family: 'Helvetica',
        fill: '#fff',
        size: 14
    }).move(20, 5);
}
ProjectBloq.prototype = Object.create(Bloq.prototype);
