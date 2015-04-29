/*global require */
'use strict';

var _ = require('lodash');
var OutputBloq = require('./../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {
    name: 'number',
    content: [
        [{
            id:'VALUE',
            alias: 'numberInput',
            value: 0
        }]
    ],
    code: '{VALUE}'
});

module.exports = bloq;