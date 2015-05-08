/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../../utils'),
    StatementBloq = require('./../../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'advancedLcdTurnOnOff',
    content: [
        [{
            bloqInputId: 'STATE',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'la luz del LCD'
        }, {
            bloqInputId: 'LCD',
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: '{LCD}.setBacklight({STATE});'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;