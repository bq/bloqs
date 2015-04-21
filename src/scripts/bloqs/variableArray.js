/*global require */
'use strict';

var _ = require('lodash');
var OutputBloq = require('./basic/outputBloq');

var bloq = _.merge(Object.create(OutputBloq), {

    name: 'variableArray',
    content: [
        [{
            alias: 'text',
            value: 'Variable'
        }, {
            alias: 'dropdown',
            value: ['Seleccionar']
        }, {
            alias: 'text',
            value: '['
        }, {
            alias: 'numberInput',
            value: 0
        }, {
            alias: 'text',
            value: ']'
        }]
    ]
});

module.exports = bloq;
