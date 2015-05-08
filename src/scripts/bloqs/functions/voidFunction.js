/*global require */
'use strict';

var _ = require('lodash'),
utils = require('./../../utils'),
StatementInputBloq = require('./../statementInputBloq');

var bloq = _.merge(_.clone(StatementInputBloq, true), {

    name: 'VoidFunction',
    content: [
    [{
        alias: 'text',
        value: 'Declarar función'
    }, {
        id:'FUNCNAME',
        alias: 'varInput',
        value: 'nombreFuncion'
    }]
    ],
    code: 'void {FUNCNAME} (){{STATEMENTS}}'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;