/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {
    name: 'declareVariable',
    content: [
        [{
            alias: 'text',
            value: 'Declarar variable'
        }, {
            id: 'NAME',
            alias: 'varInput',
            value: 'Nombre'
        }, {
            alias: 'text',
            value: '='
        }, {
            bloqInputId: 'VALUE',
            alias: 'bloqInput',
            acceptType: 'all',
        }]
    ],
    code: '{VALUE.connectionType} {NAME} = {VALUE};'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;