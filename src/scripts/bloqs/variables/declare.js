/*global require */
'use strict';

var _ = require('lodash');
var StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {
    name: 'DeclareVariable',
    content: [
        [{
            alias: 'text',
            value: 'Declarar variable'
        }, {
            alias: 'varInput',
            value: 'Nombre'
        }, {
            alias: 'text',
            value: '='
        }, {
            alias: 'bloqInput',
            acceptType: 'all',
            name: 'input'
        }]
    ]
});

bloq.connectors.push({
    type: 'connector--input',
    accept: 'connector--output',
    name: 'input'
});

module.exports = bloq;