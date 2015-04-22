/*global require */
'use strict';

var _ = require('lodash');
var StatementInputBloq = require('./../statementInputBloq');

var bloq = _.merge(Object.create(StatementInputBloq), {

    name: 'functionVoidArguments',
    content: [
        [{
            alias: 'text',
            value: 'Declarar función'
        }, {
            alias: 'stringInput',
            value: 'nombreFuncion'
        }, {
            alias: 'text',
            value: 'contando con'
        }, {
            alias: 'bloqInput',
            acceptType: 'var'
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;
