/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../build-utils'),
    StatementBloq = require('./../../statementBloq');

/**
 * Bloq name: zowiMovements
 *
 * Bloq type: statement
 *
 * Description: It makes Zowi execute a specific movement, selectable
 *              from a first drop-down, in a concrete direction,
 *              selectable from a second drop-down, the given number 
 *              of times at a determined velocity, selectable from a
 *              third drop-down.
 *
 * Return type: none
 */

var zowiMovements = _.merge(_.clone(StatementBloq, true), {

    name: 'zowiMovements',
    bloqClass: 'bloq-zowi-movements',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zowi-movements'
        }, {
            id: 'MOVEMENT',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-zowi-movements-walk',
                value: 'walk'
            }, {
                label: 'bloq-zowi-movements-turn',
                value: 'turn'
            }, {
                label: 'bloq-zowi-movements-shakeLeg',
                value: 'shakeLeg'
            }, {
                label: 'bloq-zowi-movements-bend',
                value: 'bend'
            }]
        }, {
            id: 'DIR',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-zowi-movements-forward',
                value: 'FORWARD'
            }, {
                label: 'bloq-zowi-movements-backward',
                value: 'BACKWARD'
            }, {
                label: 'bloq-zowi-movements-left',
                value: 'LEFT'
            }, {
                label: 'bloq-zowi-movements-right',
                value: 'RIGHT'
            }]
        }, {
            id: 'STEPS',
            alias: 'numberInput',
            value: 4
        }, {
            alias: 'text',
            value: 'bloq-zowi-movements-speed'
        }, {
            id: 'SPEED',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-zowi-movements-speed-small',
                value: 'LOW_SPEED'
            }, {
                label: 'bloq-zowi-movements-speed-medium',
                value: 'MEDIUM_SPEED'
            }, {
                label: 'bloq-zowi-movements-speed-high',
                value: 'HIGH_SPEED'
            }]
        }]
    ],
    code: 'zowi.{MOVEMENT}({STEPS},{SPEED},{DIR});'
});
utils.generateBloqInputConnectors(zowiMovements);

module.exports = zowiMovements;