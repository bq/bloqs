/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    StatementInputBloq = require('./../statementInputBloq');

/**
 * Bloq name: zumjuniorSensorsWhile
 *
 * Bloq type: Statement-Input
 *
 * Description: It executes the following code while sensor value matches condition
 *
 * Return type: none
 */

var zumjuniorSensorsWhile = _.merge(_.clone(StatementInputBloq, true), {

    name: 'zumjuniorSensorsWhile',
    bloqClass: 'bloq-zumjunior-sensors-while',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zumjunior-sensors-while'
        }, {
            id: 'SENSOR',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-zumjunior-sensors-temperature',
                value: 'tempSensor.getTemp()'
            }, {
                label: 'bloq-zumjunior-sensors-distance',
                value: 'ALPSSensor.getDistance()'
            }, {
                label: 'bloq-zumjunior-sensors-brightness',
                value: 'ALPSSensor.getAL()'
            }]
        }, {
            alias: 'text',
            value: 'bloq-zumjunior-is'
        }, {
            id: 'OPERATOR',
            alias: 'staticDropdown',
            options: [{
                label: '=',
                value: '=='
            }, {
                label: '!=',
                value: '!='
            }, {
                label: '>',
                value: '>'
            }, {
                label: '>=',
                value: '>='
            }, {
                label: '<',
                value: '<'
            }, {
                label: '<=',
                value: '<='
            }]
        }, {
            bloqInputId: 'VALUE',
            alias: 'bloqInput',
            acceptType: ['all'],
            suggestedBloqs: ['number', 'selectVariable']
        }, {
            alias: 'text',
            value: 'bloq-zumjunior-sensors-exec'
        }]
    ],
    code: 'while({SENSOR} {OPERATOR} {VALUE}){{STATEMENTS}}',
    arduino: {
        code: 'while({SENSOR} {OPERATOR} {VALUE}){{STATEMENTS}}',
    }
});

utils.preprocessBloq(zumjuniorSensorsWhile);

module.exports = zumjuniorSensorsWhile;
