/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    OutputBloq = require('./../outputBloq');

/**
 * Bloq name: zumjuniorReadSlider
 *
 * Bloq type: Output
 *
 * Description: It returns the read of zumjunior switch
 *
 * Return type: bool
 */

var zumjuniorReadSlider = _.merge(_.clone(OutputBloq, true), {

    name: 'zumjuniorReadSlider',
    bloqClass: 'bloq-zumjunior-read-slider',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zumjunior-read-read'
        }, {
            id: 'SWITCH',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-zumjunior-slider-switch1',
                value: '_1Pin'
            }, {
                label: 'bloq-zumjunior-slider-switch2',
                value: '_2Pin'
            }]
        }, {
            alias: 'text',
            value: 'bloq-zumjunior-read-from'
        }, {
            id: 'SLIDER',
            alias: 'dynamicDropdown',
            options: 'zumjuniorSliders'
        }]
    ],
    code: 'digitalRead({SLIDER}{SWITCH})',
    returnType: {
        type: 'simple',
        value: 'bool'
    },
    arduino: {
        code: 'digitalRead({SLIDER}{SWITCH})'
    }
});

utils.preprocessBloq(zumjuniorReadSlider);

module.exports = zumjuniorReadSlider;
