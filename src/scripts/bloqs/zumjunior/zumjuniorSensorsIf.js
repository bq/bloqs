/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    StatementInputBloq = require('./../statementInputBloq');

/**
 * Bloq name: zumjuniorSensorsIf
 *
 * Bloq type: Statement-Input
 *
 * Description: It executes the following code if sensor value matches condition
 *
 * Return type: none
 */

var zumjuniorSensorsIf = _.merge(_.clone(StatementInputBloq, true), {

    name: 'zumjuniorSensorsIf',
    bloqClass: 'bloq-zumjunior-sensors-if',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zumjunior-sensors-if'
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
            id: 'VALUE',
            alias: 'numberInput',
            value: 0
        }, {
            alias: 'text',
            value: 'bloq-zumjunior-sensors-exec'
        }]
    ],
    suggestedBloqs: ['zumjuniorsensorselseif','else'],
    code: 'if({SENSOR} {OPERATOR} {VALUE}){{STATEMENTS}}',
    arduino: {
        code: 'if({SENSOR} {OPERATOR} {VALUE}){{STATEMENTS}}',
    }
});

utils.preprocessBloq(zumjuniorSensorsIf);

zumjuniorSensorsIf.connectors[1].acceptedAliases = ['all', 'ifDown'];


module.exports = zumjuniorSensorsIf;
