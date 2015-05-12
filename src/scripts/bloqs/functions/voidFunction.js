/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementInputBloq = require('./../statementInputBloq');

var bloq = _.merge(_.clone(StatementInputBloq, true), {

    name: 'voidFunction',
    content: [
        [{
            alias: 'text',
            value: 'Declarar función'
        }, {
            id: 'FUNCNAME',
            alias: 'varInput',
            value: 'nombreFuncion'
        }]
    ],
    createDynamicContent: 'voidFunction',
    code: 'void {FUNCNAME} (){{STATEMENTS}}'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;