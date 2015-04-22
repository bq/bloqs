/*global require */
'use strict';

var _ = require('lodash');
var StatementBloq = require('./../statementBloq');

var bloq = _.merge(Object.create(StatementBloq), {

    name: 'lcdTurnOnOff',
    content: [
        [{
            alias: 'dropdown',
            options: ['Encender', 'Apagar']
        }, {
            alias: 'text',
            value: 'Encender la luz del LCD'
        }, {
            alias: 'dropdown',
            options: ['Seleccionar']
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;
