/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    StatementInputBloq = require('./../statementInputBloq');

/**
 * Bloq name: zowiIfDistance
 *
 * Bloq type: Statement-Input
 *
 * Description: It executes the following code only if Zowi detects
 *              a specific distance.
 *
 * Return type: none
 */

var zowiIfDistance = _.merge(_.clone(StatementInputBloq, true), {

    name: 'zowiIfDistance',
    bloqClass: 'bloq-zowi-if-distance',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zowi-if-distance'
        }, {
            id: 'OPERATOR',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-zowi-if-distance-less',
                value: '<'
            }, {
                label: 'bloq-zowi-if-distance-more',
                value: '>'
            }]
        }, {
            alias: 'text',
            value: 'bloq-zowi-if-distance-than'
        }, {
            id: 'DISTANCE',
            alias: 'numberInput',
            value: 15
        }, {
            alias: 'text',
            value: 'bloq-zowi-if-distance-then-v1'
        }, ]
    ],
    code: 'if(zowi.getDistance() {OPERATOR} {DISTANCE}){{STATEMENTS}}',
    arduino: {
        includes: ['BitbloqZowi.h', 'BitbloqUS.h', 'BitbloqBatteryReader.h',
            'BitbloqLedMatrix.h', 'Servo.h', 'BitbloqOscillator.h', 'EEPROM.h'
        ],
        needInstanceOf: [{
            name: 'zowi',
            type: 'Zowi'
        }],
        setupExtraCode: 'zowi.init();',
        code: 'if(zowi.getDistance() {OPERATOR} {DISTANCE}){{STATEMENTS}}'
    }
});

zowiIfDistance.connectors[1].acceptedAliases = ['all', 'ifDown'];

utils.preprocessBloq(zowiIfDistance);

module.exports = zowiIfDistance;