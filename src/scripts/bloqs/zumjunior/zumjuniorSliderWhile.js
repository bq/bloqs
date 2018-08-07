/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    StatementInputBloq = require('./../statementInputBloq');

/**
 * Bloq name: zumjuniorSlideWhile
 *
 * Bloq type: Statement-Input
 *
 * Description: It executes the following code while swith is activated
 *
 * Return type: none
 */

var zumjuniorSliderWhile = _.merge(_.clone(StatementInputBloq, true), {

    name: 'zumjuniorSliderWhile',
    bloqClass: 'bloq-zumjunior-slider-while',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zumjunior-slider-while'
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
            value: 'bloq-zumjunior-slider-of'
        }, {
            id: 'SLIDER',
            alias: 'dynamicDropdown',
            options: 'zumjuniorSliders'
        }, {
            alias: 'text',
            value: 'bloq-zumjunior-slider-isin'
        }, {
            id: 'POSITION',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-zumjunior-slider-position0',
                value: 'digitalRead'
            }, {
                label: 'bloq-zumjunior-slider-position1',
                value: '!digitalRead'
            }]
        }, {
            alias: 'text',
            value: 'bloq-zumjunior-slider-exec'
        }]
    ],
    code: 'while({POSITION}({SLIDER}{SWITCH})){{STATEMENTS}}',
    arduino: {
        code: 'while({POSITION}({SLIDER}{SWITCH})){{STATEMENTS}}'
    }
});

utils.preprocessBloq(zumjuniorSliderWhile);

module.exports = zumjuniorSliderWhile;
