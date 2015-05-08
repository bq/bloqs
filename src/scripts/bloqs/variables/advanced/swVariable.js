/*global require */
'use strict';

var _ = require('lodash');
var OutputBloq = require('./../../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'swVariable',
    content: [
        [{
            alias: 'text',
            value: 'Variable (software)'
        }, {
            id: 'VALUE',
            alias: 'dynamicDropdown',
            options: 'varSoftware'
        }]
    ],
    code: '{VALUE}'
});

module.exports = bloq;