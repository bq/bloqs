/*global require */
'use strict';

var _ = require('lodash');
var StatementInputBloq = require('./basic/statementInputBloq');

var bloq = _.merge(Object.create(StatementInputBloq), {

    name: 'functionReturn',
    content: [
        [{
            alias: 'stringInput',
            value: '',
            placeholder: 'función con retorno'
        }, {
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'ejecutar:'
        }, {
            alias: 'bloqInput',
            acceptType: 'all'
        }],
        [{
            alias: 'text',
            value: 'devuelve'
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
