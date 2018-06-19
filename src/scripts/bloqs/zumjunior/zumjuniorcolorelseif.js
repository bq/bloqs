/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    StatementInputBloq = require('./../statementInputBloq');

/**
 * Bloq name: elseif
 *
 * Bloq type: Statement-Input
 *
 * Description: It executes the following code only if the previous conditions
 *              are not met and the new one does.
 *
 * Return type: none
 */

var zumjuniorcolorelseif = _.merge(_.clone(StatementInputBloq, true), {

    name: 'zumjuniorcolorelseif',
    bloqClass: 'bloq-zumjunior-color-if',
    content: [
        [{
            alias: 'text',
            value: 'bloq-else-if-color'
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
        },{
            alias: 'text',
            value: 'bloq-zumjunior-sensors-exec'
        }]
    ],
    suggestedBloqs: ['zumjuniorcolorelseif','else'],
    code: 'else if (colorSensor.whichColor() == {COLOR}){{STATEMENTS}}',
    arduino: {
        code: 'else if (colorSensor.whichColor() == {COLOR}){{STATEMENTS}}'
    }
});

utils.preprocessBloq(zumjuniorcolorelseif);

zumjuniorcolorelseif.connectors[0].acceptedAliases = ['ifDown', 'elseifDown', 'zumjuniorcolorelseifDown'];
zumjuniorcolorelseif.connectors[1].acceptedAliases = ['all', 'ifDown'];


module.exports = zumjuniorcolorelseif;
