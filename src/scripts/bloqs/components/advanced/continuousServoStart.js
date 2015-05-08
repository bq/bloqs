/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../../utils'),
    StatementBloq = require('./../../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'advancedContinuousServoStart',
    content: [
        [{
            alias: 'text',
            value: 'Girar servo'
        }, {
            bloqInputId: 'SERVO',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'en sentido'
        }, {
            bloqInputId: 'DIRECTION',
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: '{SERVO}.write({DIRECTION});'
});

utils.generateBloqInputConnectors(bloq);


module.exports = bloq;