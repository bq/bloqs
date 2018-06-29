/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    StatementInputBloq = require('./../statementInputBloq');

/**
 * Bloq name: zumjuniorColorWhile
 *
 * Bloq type: Statement-Input
 *
 * Description: It executes the following code while sensor detects color
 *
 * Return type: none
 */

var zumjuniorColorWhile = _.merge(_.clone(StatementInputBloq, true), {

    name: 'zumjuniorColorWhile',
    bloqClass: 'bloq-zumjunior-color-while',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zumjunior-color-while'
        }, {
            id: 'MULTI',
            alias: 'dynamicDropdown',
            options: 'zumjuniorSensors',
        },{
            alias: 'text',
            value: 'bloq-zumjunior-color-detects'
        },{
            id: 'COLOR',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-zumjunior-color-red',
                value: '0'
            }, {
                label: 'bloq-zumjunior-color-green',
                value: '1'
            }, {
                label: 'bloq-zumjunior-color-blue',
                value: '2'
            }, {
                label: 'bloq-zumjunior-color-white',
                value: '3'
            }, {
                label: 'bloq-zumjunior-color-black',
                value: '4'
            }]
        }, {
            alias: 'text',
            value: 'bloq-zumjunior-sensors-exec'
        }]
    ],
    code: 'while(color{MULTI}.whichColor() == {COLOR}){{STATEMENTS}}',
    arduino: {
        code: 'while(color{MULTI}.whichColor() == {COLOR}){{STATEMENTS}}'
    }
});

utils.preprocessBloq(zumjuniorColorWhile);

module.exports = zumjuniorColorWhile;
