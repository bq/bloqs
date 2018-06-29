/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    StatementInputBloq = require('./../statementInputBloq');

/**
 * Bloq name: zumjuniorColorIf
 *
 * Bloq type: Statement-Input
 *
 * Description: It executes the following code if sensor detects color
 *
 * Return type: none
 */

var zumjuniorColorIf = _.merge(_.clone(StatementInputBloq, true), {

    name: 'zumjuniorColorIf',
    bloqClass: 'bloq-zumjunior-color-if',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zumjunior-color-if'
        },{
            id: 'MULTI',
            alias: 'dynamicDropdown',
            options: 'zumjuniorSensors',
        },{
            alias: 'text',
            value: 'bloq-zumjunior-color-detects'
        }, {
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
    suggestedBloqs: ['zumjuniorcolorelseif','else'],
    code: 'if(color{MULTI}.whichColor() == {COLOR}){{STATEMENTS}}',
    arduino: {
        code: 'if(color{MULTI}.whichColor() == {COLOR}){{STATEMENTS}}'
    }
});

zumjuniorColorIf.connectors[1].acceptedAliases = ['all', 'ifDown', 'zumjuniorColorIfDown'];

utils.preprocessBloq(zumjuniorColorIf);

module.exports = zumjuniorColorIf;
