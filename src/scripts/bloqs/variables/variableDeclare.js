/*global require */
'use strict';

var _ = require('lodash');
var StatementBloq = require('./../statementBloq');

var bloq = _.merge(Object.create(StatementBloq), {

    name: 'variableDeclare',
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
            acceptType: 'all'
        }]
    ]
});


module.exports = bloq;
