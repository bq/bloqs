/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    StatementBloq = require('./../statementBloq');

/**
 * Bloq name: zumjuniorTurnOffLed
 *
 * Bloq type: Statement
 *
 * Description: Turns off zumjunior integrated led
 *
 * Return type: none
 */

var zumjuniorTurnOffLed = _.merge(_.clone(StatementBloq, true), {

    name: 'zumjuniorTurnOffLed',
    bloqClass: 'bloq-zumjunior-turnoff-led',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zumjunior-turnoff-led'
        }]
    ],
    code: 'zumJunior.setRGBLEDColor(BQ::ZUMJunior::BLACK);',
    arduino: {
        code: 'zumJunior.setRGBLEDColor(BQ::ZUMJunior::BLACK);'
    }
});

utils.preprocessBloq(zumjuniorTurnOffLed);

module.exports = zumjuniorTurnOffLed;
