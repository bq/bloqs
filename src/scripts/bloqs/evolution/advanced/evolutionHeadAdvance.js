/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

/**
* Bloq name: evolutionHeadAdvance
*
* Bloq type: statement
*
* Description: It makes Evolution turn its head a given amount
*              of degrees to a specific side, selectable from
*              a drop-down.
*
* Return type: none
*/

var evolutionHeadAdvance = _.merge(_.clone(OutputBloq, true), {

    name: 'evolutionHeadAdvance',
    bloqClass: 'bloq-evolution-head',
    content: [
        [{
            alias: 'text',
            value: 'bloq-evolution-head-advance'
        }, {
            bloqInputId: 'DEGREES',
            alias: 'bloqInput',
            acceptType: 'float'
        }, {
            id: 'SIDE',
            alias: 'staticDropdown',
            options: [{
                    label: 'bloq-evolution-head-advance-left',
                    value: 'HEAD_LEFT'
                }, {
                    label: 'bloq-evolution-head-advance-right',
                    value: 'HEAD_RIGHT'
                }]
        }]
    ],
    code: 'evolution.turnHead({DEGREES});',
});
utils.generateBloqInputConnectors(evolutionHeadAdvance);

module.exports = evolutionHeadAdvance;