/*global require */
'use strict';

var _ = require('lodash');
var StatementBloq = require('./basic/statementBloq');

var bloq = _.merge(Object.create(StatementBloq), {

    name: 'LED',
    content: [
        [{
            alias: 'dropdown',
            value: ['Encender', 'Apagar']
        }, {
            alias: 'text',
            value: 'el LED'
        }, {
            alias: 'dropdown',
            value: ['Seleccionar']
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;
