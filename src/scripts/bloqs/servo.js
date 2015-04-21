/*global require */
'use strict';

var _ = require('lodash');
var StatementBloq = require('./basic/statementBloq');

var bloq = _.merge(Object.create(StatementBloq), {

    name: 'servo',
    content: [
        [{
            alias: 'text',
            value: 'Mover mini servo de'
        }, {
            alias: 'numberInput',
            value: 0
        }, {
            alias: 'text',
            value: 'a'
        }, {
            alias: 'numberInput',
            value: 0
        }, {
            alias: 'text',
            value: 'grados'
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;
