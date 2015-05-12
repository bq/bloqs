/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementInputBloq = require('./../statementInputBloq');

var bloq = _.merge(_.clone(StatementInputBloq, true), {

    name: 'voidFunctionWithArguments',
    content: [
        [{
            alias: 'text',
            value: 'Declarar función'
        }, {
            id: 'FUNCNAME',
            alias: 'varInput',
            value: 'nombreFuncion'
        }, {
            alias: 'text',
            value: 'contando con'
        }, {
            bloqInputId: 'ARGS',
            alias: 'bloqInput',
            acceptType: 'var'
        }]
    ],
    createDynamicContent: 'voidFunction',
    code: 'void {FUNCNAME} ({ARGS}){{STATEMENTS}}'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;