/*--IN PROGRESS--*/

/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../build-utils'),
    StatementBloq = require('./../../statementBloq');

/**
 * Bloq name: zowiMovementsHeightAdvanced
 *
 * Bloq type: statement
 *
 * Description: It makes Zowi execute a specific movement, selectable
 *              from a first drop-down, in a concrete direction,
 *              selectable from a second drop-down, the given number 
 *              of times at a determined velocity until a limit height.
 *
 * Return type: none
 */

var zowiMovementsHeightAdvanced = _.merge(_.clone(StatementBloq, true), {

    name: 'zowiMovementsHeightAdvanced',
    bloqClass: 'bloq-zowi-movements-height-advanced',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zowi-movements-height-advanced'
        }, {
            id: 'MOVEMENT',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-zowi-movements-height-advanced-moonwalker',
                value: 'moonwalker'
            }, {
                label: 'bloq-zowi-movements-height-advanced-crusaito',
                value: 'crusaito'
            }, {
                label: 'bloq-zowi-movements-height-advanced-flapping',
                value: 'flapping'
            }]
        }, {
            id: 'DIR',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-zowi-movements-height-advanced-forward',
                value: 'FORWARD'
            }, {
                label: 'bloq-zowi-movements-height-advanced-backward',
                value: 'BACKWARD'
            }, {
                label: 'bloq-zowi-movements-height-advanced-left',
                value: 'LEFT'
            }, {
                label: 'bloq-zowi-movements-height-advanced-right',
                value: 'RIGHT'
            }]
        }, {
            bloqInputId: 'STEPS',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'bloq-zowi-movements-height-advanced-speed'
        }, {
            bloqInputId: 'SPEED',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'bloq-zowi-movements-height-advanced-height'
        }, {
            bloqInputId: 'HEIGHT',
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: 'zowi.{MOVEMENT}({STEPS},{SPEED},{HEIGHT},{DIR});'
});
utils.generateBloqInputConnectors(zowiMovementsHeightAdvanced);

module.exports = zowiMovementsHeightAdvanced;