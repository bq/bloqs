/*global require */
'use strict';

var _ = require('lodash');
var StatementBloq = require('./../statementBloq');

var bloq = _.merge(Object.create(StatementBloq), {

    name: 'buzzer',
    content: [
        [{
            alias: 'text',
            value: 'Sonar el buzzer'
        }, {
            alias: 'dropdown',
            options: ['Seleccionar']
        }, {
            alias: 'text',
            value: 'con la nota'
        }, {
            alias: 'dropdown',
            options: ['Do', 'Re', 'Mi', 'Fa', 'Sol', 'La', 'Si']
        }, {
            alias: 'text',
            value: 'durante'
        }, {
            alias: 'numberInput',
            value: 0
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
