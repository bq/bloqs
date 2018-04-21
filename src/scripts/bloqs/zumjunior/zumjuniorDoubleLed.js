/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    StatementBloq = require('./../statementBloq');

/**
 * Bloq name: zumjuniorDoubleLed
 *
 * Bloq type: Statement
 *
 * Description: It turns leds on/off
 *
 * Return type: none
 */

var zumjuniorDoubleLed = _.merge(_.clone(StatementBloq, true), {

    name: 'zumjuniorDoubleLed',
    bloqClass: 'bloq-zumjunior-doubleled',
    content: [
        [{
            id: 'STATUS',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-zumjunior-doubleled-turnon',
                value: 'LOW'
            },{
                label: 'bloq-zumjunior-doubleled-turnoff',
                value: 'HIGH'
              }]
        }, {
            alias: 'text',
            value: 'bloq-zumjunior-doubleled-led'
        }, {
            id: 'LED',
            alias: 'dynamicDropdown',
            options: 'zumjuniorDoubleLeds'
        }, {
            id: 'COLOR',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-zumjunior-doubleled-white',
                value: 'WhitePin'
            }, {
                label: 'bloq-zumjunior-doubleled-color',
                value: 'ColorPin'
            }]
        }]
    ],
    code: 'digitalWrite({LED}{COLOR},{STATUS});',
    arduino: {
        code: 'digitalWrite({LED}{COLOR},{STATUS});'
    }
});

utils.preprocessBloq(zumjuniorDoubleLed);

module.exports = zumjuniorDoubleLed;
