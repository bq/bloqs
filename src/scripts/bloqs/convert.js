/*global require */
'use strict';

var _ = require('lodash');
var OutputBloq = require('./basic/outputBloq');

var bloq = _.merge(Object.create(OutputBloq), {

    name: 'convert',
    content: [
        [{
            alias: 'text',
            value: 'Convertir'
        }, {
            alias: 'dropdown',
            value: ['Decimal', 'Hexadecimal', 'Octal', 'Binario']
        }, {
            alias: 'text',
            value: 'en valor'
        }, {
            alias: 'bloqInput',
            acceptType: 'number'
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;
