/*global require */
'use strict';

var _ = require('lodash');
var StatementBloq = require('./basic/statementBloq');

var bloq = _.merge(Object.create(StatementBloq), {

    name: 'pinWrite',
    content: [
        [{
            alias: 'text',
            value: 'Escribe en el pin digital'
        }, {
            alias: 'dropdown',
            value: ['Seleccionar']
        }, {
            alias: 'text',
            value: 'estado'
        }, {
            alias: 'dropdown',
            value: ['alto', 'bajo']
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;
