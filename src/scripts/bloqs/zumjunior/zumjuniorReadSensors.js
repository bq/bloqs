/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    OutputBloq = require('./../outputBloq');

/**
 * Bloq name: zumjuniorReadSensors
 *
 * Bloq type: Output
 *
 * Description: It returns the read of zumjunior sensors
 *
 * Return type: bool
 */

var zumjuniorReadSensors = _.merge(_.clone(OutputBloq, true), {

    name: 'zumjuniorReadSensors',
    bloqClass: 'bloq-zumjunior-read-sensors',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zumjunior-read-read'
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
        }]
    ],
    code: '{SENSOR}',
    returnType: {
        type: 'simple',
        value: 'float'
    },
    arduino: {
        code: '{SENSOR}'
    }
});

utils.preprocessBloq(zumjuniorReadSensors);

module.exports = zumjuniorReadSensors;
