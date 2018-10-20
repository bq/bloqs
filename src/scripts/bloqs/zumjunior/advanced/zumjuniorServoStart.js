/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../build-utils'),
    StatementBloq = require('./../../statementBloq');

/**
 * Bloq name: zumjuniorServoStart
 *
 * Bloq type: Statement
 *
 * Description: It sets zumjunior servo direction and speed
 *
 * Return type: none
 */

var zumjuniorServoStartAdvanced = _.merge(_.clone(StatementBloq, true), {

    name: 'zumjuniorServoStartAdvanced',
    bloqClass: 'bloq-zumjunior-servo-start',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zumjunior-servo-start-turn'
        }, {
            id: 'SERVO',
            alias: 'dynamicDropdown',
            options: 'zumjuniorServos'
        }, {
            alias: 'text',
            value: 'bloq-zumjunior-servo-start-direction'
        }, {
            id: 'DIRECTION',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-zumjunior-servo-start-clockwise',
                value: '90 + '
            }, {
                label: 'bloq-zumjunior-servo-start-counterclockwise',
                value: '90 - '
            }]
        }, {
            alias: 'text',
            value: 'bloq-zumjunior-servo-speed'
        }, {
            bloqInputId: 'SPEED',
            alias: 'bloqInput',
            acceptType: ['all'],
            suggestedBloqs: ['number', 'selectVariable']
        }]
    ],
    code: '{SERVO}.write({DIRECTION} {SPEED});',
    arduino: {
        code: '{SERVO}.write({DIRECTION} {SPEED});'
    }
});

utils.preprocessBloq(zumjuniorServoStartAdvanced);

module.exports = zumjuniorServoStartAdvanced;
