/*global require */
'use strict';

var _ = require('lodash');
var OutputBloq = require('./basic/outputBloq');

var bloq = _.merge(Object.create(OutputBloq), {

    name: 'mathOperations',
    content: [
        [{
            alias: 'dropdown',
            value: ['Raíz cuadrada', 'Valor absoluto', '-', 'ln', 'log10', 'e^', '10^']
        }, {
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;
