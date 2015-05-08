/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../../utils'),
    StatementBloq = require('./../../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'advancedBuzzer',
    content: [
        [{
            alias: 'text',
            value: 'Sonar el buzzer'
        }, {
            bloqInputId: 'BUZZER',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'con la nota'
        }, {
            bloqInputId: 'NOTE',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'durante'
        }, {
            bloqInputId: 'SECONDS',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'ms'
        }]
    ],
    code: 'tone({BUZZER},{NOTE},{SECONDS});\ndelay({SECONDS});'
});
utils.generateBloqInputConnectors(bloq);

module.exports = bloq;