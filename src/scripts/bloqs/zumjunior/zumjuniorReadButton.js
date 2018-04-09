/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    OutputBloq = require('./../outputBloq');

/**
 * Bloq name: zumjuniorReadButton
 *
 * Bloq type: Output
 *
 * Description: It returns the read of zumjunior button
 *
 * Return type: bool
 */

var zumjuniorReadButton = _.merge(_.clone(OutputBloq, true), {

    name: 'zumjuniorReadButton',
    bloqClass: 'bloq-zumjunior-read-button',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zumjunior-read-read'
        }, {
            id: 'BUTTON',
            alias: 'dynamicDropdown',
            options: 'zumjuniorButtons'
        }]
    ],
    code: 'digitalRead({BUTTON}Pin)',
    returnType: {
        type: 'simple',
        value: 'bool'
    },
    arduino: {
        code: 'digitalRead({BUTTON}Pin)'
    }
});

utils.preprocessBloq(zumjuniorReadButton);

module.exports = zumjuniorReadButton;
