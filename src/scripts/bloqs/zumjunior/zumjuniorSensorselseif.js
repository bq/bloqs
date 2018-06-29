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

var zumjuniorsensorselseif = _.merge(_.clone(StatementInputBloq, true), {

    name: 'zumjuniorsensorselseif',
    bloqClass: 'bloq-zumjunior-sensors-if',
    content: [
        [{
            alias: 'text',
            value: 'bloq-else-if-if'
        }, {
            id: 'SENSOR',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-zumjunior-sensors-temperature',
                value: 'temp{MULTI}.getTemp()'
            }, {
                label: 'bloq-zumjunior-sensors-distance',
                value: 'ALPS{MULTI}.getDistance()'
            }, {
                label: 'bloq-zumjunior-sensors-brightness',
                value: 'ALPS{MULTI}.getAL()'
            }]
        },{
            alias: 'text',
            value: 'bloq-zumjunior-multi-measured-by'
        },{
            id: 'MULTI',
            alias: 'dynamicDropdown',
            options: 'zumjuniorSensors',
        },{
            alias: 'text',
            value: 'bloq-zumjunior-is'
        }, {
            id: 'OPERATOR',
            alias: 'staticDropdown',
            options: [{
                label: '=',
                value: '=='
            }, {
                label: '!=',
                value: '!='
            }, {
                label: '>',
                value: '>'
            }, {
                label: '<',
                value: '<'
            }]
        }, {
            id: 'VALUE',
            alias: 'numberInput',
            value: 0
        }, {
            alias: 'text',
            value: 'bloq-zumjunior-sensors-exec'
        }]
    ],
    suggestedBloqs: ['zumjuniorsensorselseif','else'],
    code: 'else if ({SENSOR} {OPERATOR} {VALUE}){{STATEMENTS}}',
    arduino: {
        code: 'else if ({SENSOR} {OPERATOR} {VALUE}){{STATEMENTS}}'
    }
});

utils.preprocessBloq(zumjuniorsensorselseif);

zumjuniorsensorselseif.connectors[0].acceptedAliases = ['ifDown', 'elseifDown', 'zumjuniorsensorselseifDown'];
zumjuniorsensorselseif.connectors[1].acceptedAliases = ['all', 'elseifDown'];


module.exports = zumjuniorsensorselseif;
