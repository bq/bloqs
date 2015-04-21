/*global require */
'use strict';

var _ = require('lodash');
var StatementBloq = require('./basic/statementBloq');

var bloq = _.merge(Object.create(StatementBloq), {

    name: 'lcdTurnOn',
    content: [
        [{
            alias: 'text',
            value: 'Encender la luz del LCD'
        }, {
            alias: 'dropdown',
            value: ['Seleccionar']
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;
