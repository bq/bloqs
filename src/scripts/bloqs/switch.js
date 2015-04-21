/*global require */
'use strict';

var _ = require('lodash');
var StatementInputBloq = require('./basic/statementInputBloq');

var bloq = _.merge(Object.create(StatementInputBloq), {

    name: 'switch',
    content: [
        [{
            alias: 'text',
            value: 'Comprobar si'
        }, {
            alias: 'dropdown',
            value: ['Seleccionar']
        }, {
            alias: 'text',
            value: 'ejecutar:'
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;
