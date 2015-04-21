/*global require */
'use strict';

var _ = require('lodash');
var StatementBloq = require('./basic/statementBloq');

var bloq = _.merge(Object.create(StatementBloq), {

    name: 'continuousServoStart',
    content: [
        [{
            alias: 'text',
            value: 'Girar servo'
        }, {
            alias: 'dropdown',
            value: ['Seleccionar']
        }, {
            alias: 'text',
            value: 'en sentido'
        }, {
            alias: 'dropdown',
            value: ['horario', 'antihorario']
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});


module.exports = bloq;
