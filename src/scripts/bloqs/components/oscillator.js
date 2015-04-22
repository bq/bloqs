/*global require */
'use strict';

var _ = require('lodash');
var StatementBloq = require('./../statementBloq');

var bloq = _.merge(Object.create(StatementBloq), {

    name: 'oscillator',
    content: [
        [{
            alias: 'text',
            value: 'Oscilar servo'
        }, {
            alias: 'dropdown',
            options: ['Seleccionar']
        }, {
            alias: 'text',
            value: 'alrededor de'
        }, {
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'con amplitud'
        }, {
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'con velocidad'
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
