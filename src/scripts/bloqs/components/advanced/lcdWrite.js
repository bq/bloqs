/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../../utils'),
    StatementBloq = require('./../../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'advancedLcdWrite',
    content: [
        [{
            alias: 'text',
            value: 'Escribir'
        }, {
            bloqInputId: 'TEXT',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'en el LCD'
        }, {
            bloqInputId: 'LCD',
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: '{LCD}.write({TEXT});'

});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;