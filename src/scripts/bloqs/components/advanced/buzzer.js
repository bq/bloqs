/*global require */
'use strict';

var _ = require('lodash');
var StatementBloq = require('./../../statementBloq');

var bloq = _.merge(Object.create(StatementBloq), {

    name: 'buzzerAdvanced',
    content: [
        [{
            alias: 'text',
            value: 'Sonar el buzzer'
        }, {
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'con la nota'
        }, {
            alias: 'bloqInput',
            acceptType: 'number'
        }, {
            alias: 'text',
            value: 'durante'
        }, {
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'ms'
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;
