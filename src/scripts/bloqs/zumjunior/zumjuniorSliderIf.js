/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    StatementInputBloq = require('./../statementInputBloq');

/**
 * Bloq name: zumjuniorSliderIf
 *
 * Bloq type: Statement-Input
 *
 * Description: It executes the following code if swith is activated
 *
 * Return type: none
 */

var zumjuniorSliderIf = _.merge(_.clone(StatementInputBloq, true), {

    name: 'zumjuniorSliderIf',
    bloqClass: 'bloq-zumjunior-slider-if',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zumjunior-slider-if'
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
    suggestedBloqs: ['else', 'elseif'],
    code: 'if({POSITION}({SLIDER}{SWITCH})){{STATEMENTS}}',
    arduino: {
        code: 'if({POSITION}({SLIDER}{SWITCH})){{STATEMENTS}}'
    }
});

utils.preprocessBloq(zumjuniorSliderIf);

zumjuniorSliderIf.connectors[1].acceptedAliases = ['all', 'ifDown'];

module.exports = zumjuniorSliderIf;
