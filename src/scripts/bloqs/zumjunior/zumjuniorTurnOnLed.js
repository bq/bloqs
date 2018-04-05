/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    StatementBloq = require('./../statementBloq');

/**
 * Bloq name: zumjuniorTurnOnLed
 *
 * Bloq type: Statement
 *
 * Description: Turns on zumjunior integrated led
 *
 * Return type: none
 */

var zumjuniorTurnOnLed = _.merge(_.clone(StatementBloq, true), {

    name: 'zumjuniorTurnOnLed',
    bloqClass: 'bloq-zumjunior-turnon-led',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zumjunior-turnon-led'
        }, {
            id: 'COLOR',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-zumjunior-color-red',
                value: 'BQ::ZUMJunior::RED'
            }, {
                label: 'bloq-zumjunior-color-green',
                value: 'BQ::ZUMJunior::GREEN'
            }, {
                label: 'bloq-zumjunior-color-blue',
                value: 'BQ::ZUMJunior::BLUE'
            }, {
                label: 'bloq-zumjunior-color-yellow',
                value: 'BQ::ZUMJunior::YELLOW'
            }, {
                label: 'bloq-zumjunior-color-pink',
                value: 'BQ::ZUMJunior::PINK'
            }, {
                label: 'bloq-zumjunior-color-white',
                value: 'BQ::ZUMJunior::WHITE'
            }]
        }]
    ],
    code: 'zumJunior.setRGBLEDColor({COLOR});',
    arduino: {
        code: 'zumJunior.setRGBLEDColor({COLOR});'
    }
});

utils.preprocessBloq(zumjuniorTurnOnLed);

module.exports = zumjuniorTurnOnLed;
