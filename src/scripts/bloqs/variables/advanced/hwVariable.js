/*global require */
'use strict';

var _ = require('lodash');
var OutputBloq = require('./../../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'hwVariable',
    content: [
        [{
            alias: 'text',
            value: 'Variable (componentes)'
        }, {
            id: 'VALUE',
            alias: 'dynamicDropdown',
            options: 'varComponents'
        }]
    ],
    code: '{VALUE}'
});

module.exports = bloq;