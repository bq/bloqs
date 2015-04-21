/*global require */
'use strict';

var _ = require('lodash');
var OutputBloq = require('./basic/outputBloq');

var bloq = _.merge(Object.create(OutputBloq), {

    name: 'specialCharacters',
    content: [
        [{
            alias: 'text',
            value: 'Caracteres especiales'
        }, {
            alias: 'dropdown',
            value: ['tabulador', 'Retorno de carro', 'Salto de línea']
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;
