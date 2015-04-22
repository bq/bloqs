/*global require */
'use strict';

var _ = require('lodash');
var StatementInputBloq = require('./../statementInputBloq');

var bloq = _.merge(Object.create(StatementInputBloq), {

    name: 'caseDefault',
    content: [
        [{
            alias: 'text',
            value: 'en otro caso, ejecutar:'
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;
