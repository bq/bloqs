/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../build-utils'),
    StatementBloq = require('./../../statementBloq');

/**
 * Bloq name: advancedEquidnaRGB
 *
 * Bloq type: Statement
 *
 * Description: It switches on a specific rgb led, selectable
 *              from a first drop-down, with the selectable colour
 *              from a second drop-down.
 *
 * Return type: none
 */

var advancedEquidnaRGB = _.merge(_.clone(StatementBloq, true), {

    name: 'advancedEquidnaRGB',
    bloqClass: 'bloq-components-color',
    content: [
        [{
            alias: 'text',
            value: 'bloq-rgbLed'
        }, {
            alias: 'text',
            value: 'with-the-color'
        }, {
            alias: 'text',
            value: 'bloq-mbot-setled-red'
        }, {
            bloqInputId: 'RED',
            alias: 'bloqInput',
            acceptType: ['all'],
            suggestedBloqs: ['number', 'selectVariable']
        }, {
            alias: 'text',
            value: 'bloq-mbot-setled-green'
        }, {
            bloqInputId: 'GREEN',
            alias: 'bloqInput',
            acceptType: ['all'],
            suggestedBloqs: ['number', 'selectVariable']
        }, {
            alias: 'text',
            value: 'bloq-mbot-setled-blue'
        }, {
            bloqInputId: 'BLUE',
            alias: 'bloqInput',
            acceptType: ['all'],
            suggestedBloqs: ['number', 'selectVariable']
        }]
    ],
    arduino: {
        code: 'equidna.setRGBcolor({RED}, {GREEN}, {BLUE});'
    }

});

utils.preprocessBloq(advancedEquidnaRGB);

module.exports = advancedEquidnaRGB;