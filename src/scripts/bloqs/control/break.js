/*global require */
'use strict';

var _ = require('lodash');
var StatementBloq = require('./../statementBloq');

var bloq = _.merge(Object.create(StatementBloq), {

    name: 'break',
    content: [
        [{
            alias: 'text',
            value: 'Interrumpir el bucle'
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;
