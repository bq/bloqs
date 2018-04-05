/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    StatementBloq = require('./../statementBloq');

/**
 * Bloq name: zumjuniorServoStop
 *
 * Bloq type: Statement
 *
 * Description: It stops zumjunior servo
 *
 * Return type: none
 */

var zumjuniorServoStop = _.merge(_.clone(StatementBloq, true), {

    name: 'zumjuniorServoStop',
    bloqClass: 'bloq-zumjunior-servo-stop',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zumjunior-servo-stop'
        }, {
            id: 'SERVO',
            alias: 'dynamicDropdown',
            options: 'zumjuniorServos'
        }]
    ],
    code: '{SERVO}.write(90);',
    arduino: {
        code: '{SERVO}.write(90);'
    }
});

utils.preprocessBloq(zumjuniorServoStop);

module.exports = zumjuniorServoStop;
