/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'serialSend',
    content: [
        [{
            id:'SERIAL',
            alias: 'dropdown',
            options: 'serialElements'
        }, {
            alias: 'text',
            value: 'enviar '
        }, {
            bloqInputId: 'DATA',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            id:'FUNCTION',
            alias: 'dropdown',
            options: [{label: 'sin salto de línea', value: 'print'},{label: 'con salto de línea', value: 'println'}]
        }]
    ],
    code: '{SERIAL}.{FUNCTION}({DATA});'
});
utils.generateBloqInputConnectors(bloq);

module.exports = bloq;