/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../build-utils'),
    StatementInputBloq = require('./../../statementInputBloq');

/**
* Bloq name: evolutionIfLightAdvanced
*
* Bloq type: Statement-Input
*
* Description: It executes the following code only if Evolution detects
*              black or white, selectable from two drop-downs, in both
*              light follower sensors.
*
* Return type: none
*/

var evolutionIfLightAdvanced = _.merge(_.clone(StatementInputBloq, true), {

    name: 'evolutionIfLightAdvanced',
    bloqClass: 'bloq-evolution-if-light-advanced',
    content: [
        [{
            alias: 'text',
            value: 'bloq-evolution-if-light-advanced'
        }, {
            id: 'OPERATORLEFT',
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
                    label: '>=',
                    value: '>='
                }, {
                    label: '<',
                    value: '<'
                }, {
                    label: '<=',
                    value: '<='
                }]
        }, {
            id: 'LIGHTLEFT',
            alias: 'bloqInput',
            acceptType: 'number'
        }, {
            alias: 'text',
            value: 'bloq-evolution-if-light-advanced-and'
        }, {
            id: 'OPERATORRIGHT',
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
                    label: '>=',
                    value: '>='
                }, {
                    label: '<',
                    value: '<'
                }, {
                    label: '<=',
                    value: '<='
                }]
        }, {
            id: 'LIGHTRIGHT',
            alias: 'bloqInput',
            acceptType: 'number'
        }, {
            alias: 'text',
            value: 'bloq-evolution-if-light-advanced-then'
        },]
    ],
    code: 'if(evolution.getLight(LEFT) {OPERATORLEFT} {LIGHTLEFT} && evolution.getLight(RIGHT) {OPERATORRIGHT} {LIGHTRIGHT}){{STATEMENTS}}'
});

utils.generateBloqInputConnectors(evolutionIfLightAdvanced);

module.exports = evolutionIfLightAdvanced;
