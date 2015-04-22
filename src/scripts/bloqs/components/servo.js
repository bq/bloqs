/*global require */
'use strict';

var _ = require('lodash');
var StatementBloq = require('./../statementBloq');

var bloq = _.merge(Object.create(StatementBloq), {

    name: 'servo',
    content: [
        [{
            alias: 'text',
            value: 'Mover'
        }, {
            alias: 'dropdown',
            options: ['Seleccionar']
        }, {
            alias: 'text',
            value: 'de'
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
