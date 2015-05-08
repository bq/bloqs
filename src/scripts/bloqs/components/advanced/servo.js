/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../../utils'),
    StatementBloq = require('./../../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'advancedServo',
    content: [
        [{
            alias: 'text',
            value: 'Mover'
        }, {
            bloqInputId: 'SERVO',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'a'
        }, {
            bloqInputId: 'POSITION',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'grados'
        }]
    ],
    code: '{SERVO}.write({POSITION})'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;