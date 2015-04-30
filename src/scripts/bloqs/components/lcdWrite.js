/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'lcdWrite',
    content: [
        [{
            alias: 'text',
            value: 'Escribir'
        }, {
            id: 'TEXT',
            alias: 'stringInput',
            value: ''
        }, {
            alias: 'text',
            value: 'en el LCD'
        }, {
            id:'LCD',
            alias: 'dropdown',
            options: 'LCDs'
        }]
    ],
    code: '{LCD}.write("{TEXT}");'

});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;