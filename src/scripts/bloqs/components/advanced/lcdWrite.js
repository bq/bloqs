/*global require */
'use strict';

var _ = require('lodash');
var StatementBloq = require('./../../statementBloq');

var bloq = _.merge(Object.create(StatementBloq), {

    name: 'lcdWriteAdvanced',
    content: [
        [{
            alias: 'text',
            value: 'Escribir'
        }, {
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'en el LCD'
        }, {
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;
