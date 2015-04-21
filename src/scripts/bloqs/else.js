/*global require */
'use strict';

var _ = require('lodash');
var StatementInputBloq = require('./basic/statementInputBloq');

var bloq = _.merge(Object.create(StatementInputBloq), {

    name: 'else',
    content: [
        [{
            alias: 'text',
            value: 'de lo contrario ejecutar:'
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;
