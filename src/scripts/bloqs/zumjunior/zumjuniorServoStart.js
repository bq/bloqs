/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    StatementBloq = require('./../statementBloq');

/**
 * Bloq name: zumjuniorServoStart
 *
 * Bloq type: Statement
 *
 * Description: It sets zumjunior servo direction and speed
 *
 * Return type: none
 */

var zumjuniorServoStart = _.merge(_.clone(StatementBloq, true), {

    name: 'zumjuniorServoStart',
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
            id: 'SPEED',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-zumjunior-servo-start-high-speed',
                value: '30'
            }, {
                label: 'bloq-zumjunior-servo-start-medium-speed',
                value: '16'
            }, {
                label: 'bloq-zumjunior-servo-start-low-speed',
                value: '9'
            }]
        }]
    ],
    code: '{SERVO}.write({DIRECTION} {SPEED});',
    arduino: {
        code: '{SERVO}.write({DIRECTION} {SPEED});'
    }
});

utils.preprocessBloq(zumjuniorServoStart);

module.exports = zumjuniorServoStart;
