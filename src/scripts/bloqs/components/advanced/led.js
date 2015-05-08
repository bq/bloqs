/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../../utils'),
    StatementBloq = require('./../../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'advancedLed',
    content: [
        [{
            bloqInputId: 'STATE',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'el LED'
        }, {
            bloqInputId: 'LED',
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: 'digitalWrite({LED},{STATE});'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;