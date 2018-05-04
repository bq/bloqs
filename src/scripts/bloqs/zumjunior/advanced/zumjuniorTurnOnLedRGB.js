/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../build-utils'),
    StatementBloq = require('./../../statementBloq');

/**
 * Bloq name: zumjuniorTurnOnLedRGBAdvanced
 *
 * Bloq type: Statement
 *
 * Description: Turns on zumjunior integrated led with RGB value
 *
 * Return type: none
 */

var zumjuniorTurnOnLedRGBAdvanced = _.merge(_.clone(StatementBloq, true), {

    name: 'zumjuniorTurnOnLedRGBAdvanced',
    bloqClass: 'bloq-zumjunior-turnon-led-rgb',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zumjunior-turnon-led-rgb'
        }, {
            bloqInputId: 'RVALUE',
            alias: 'bloqInput',
            acceptType: ['all'],
            suggestedBloqs: ['number', 'selectVariable']
        }, {
            bloqInputId: 'GVALUE',
            alias: 'bloqInput',
            acceptType: ['all'],
            suggestedBloqs: ['number', 'selectVariable']
        }, {
            bloqInputId: 'BVALUE',
            alias: 'bloqInput',
            acceptType: ['all'],
            suggestedBloqs: ['number', 'selectVariable']
        }]
    ],
    code: 'zumJunior.setRGBLED({RVALUE},{GVALUE},{BVALUE});',
    arduino: {
        code: 'zumJunior.setRGBLED({RVALUE},{GVALUE},{BVALUE});'
    }
});

utils.preprocessBloq(zumjuniorTurnOnLedRGBAdvanced);

module.exports = zumjuniorTurnOnLedRGBAdvanced;
