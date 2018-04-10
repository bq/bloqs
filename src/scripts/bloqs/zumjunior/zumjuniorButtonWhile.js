/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    StatementInputBloq = require('./../statementInputBloq');

/**
 * Bloq name: zumjuniorButtonWhile
 *
 * Bloq type: Statement-Input
 *
 * Description: It executes the following code while button is pressed
 *
 * Return type: none
 */

var zumjuniorButtonWhile = _.merge(_.clone(StatementInputBloq, true), {

    name: 'zumjuniorButtonWhile',
    bloqClass: 'bloq-zumjunior-button-while',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zumjunior-button-while'
        }, {
            id: 'BUTTON',
            alias: 'dynamicDropdown',
            options: 'zumjuniorButtons'
        }, {
            alias: 'text',
            value: 'bloq-zumjunior-button-is'
        }, {
            id: 'IS_PRESSED',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-zumjunior-button-pressed',
                value: 'digitalRead'
            }, {
                label: 'bloq-zumjunior-button-notpressed',
                value: '!digitalRead'
            }]
        }, {
            alias: 'text',
            value: 'bloq-zumjunior-button-exec'
        }]
    ],
    code: 'while({IS_PRESSED}({BUTTON}Pin)){{STATEMENTS}}',
    arduino: {
        code: 'while({IS_PRESSED}({BUTTON}Pin)){{STATEMENTS}}',
    }
});

utils.preprocessBloq(zumjuniorButtonWhile);

module.exports = zumjuniorButtonWhile;
