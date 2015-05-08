/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    OutputBloq = require('./../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'arrayVariable',
    content: [
        [{
            alias: 'text',
            value: 'Variable'
        }, {
            id: 'VAR',
            alias: 'dynamicDropdown',
            options: 'variables'
        }, {
            alias: 'text',
            value: '['
        }, {
            id: 'POSITION',
            alias: 'numberInput',
            value: 0
        }, {
            alias: 'text',
            value: ']'
        }]
    ],
    code: '{VAR}[{POSITION}]',
    returnType: '{VAR.connectionType}'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;