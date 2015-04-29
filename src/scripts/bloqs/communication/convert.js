/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    OutputBloq = require('./../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'convert',
    content: [
        [{
            alias: 'text',
            value: 'Convertir'
        }, {
            bloqInputId:'NUMBER',
            alias: 'bloqInput',
            acceptType: 'number'
        }, {
            alias: 'text',
            value: 'a'
        }, {
            id : 'TYPE',
            alias: 'dropdown',
            options: [{label:'Decimal', value:'DEC'}, {label:'Hexadecimal', value:'HEX'}, {label:'Octal', value:'OCT'}, {label:'Binario', value:'BIN'}]
        }]
    ],
    code: '({NUMBER},{TYPE});'
});
utils.generateBloqInputConnectors(bloq);

module.exports = bloq;