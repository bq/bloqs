/*global require */
'use strict';

var _ = require('lodash');
var StatementInputBloq = require('./basic/statementInputBloq');

var bloq = _.merge(Object.create(StatementInputBloq), {

    name: 'for',
    content: [
        [{
            alias: 'text',
            value: 'Contar con'
        }, {
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'desde'
        }, {
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'hasta'
        }, {
            alias: 'dropdown',
            value: ['sumando', 'restando']
        }, {
            alias: 'text',
            value: 'ejecutar:'
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;
