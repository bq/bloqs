/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    StatementBloq = require('./../statementBloq');

/**
 * Bloq name: mStarterMove
 *
 * Bloq type: Statement
 *
 * Description: Move the vehicle forward
 *
 */

var mStarterMove = _.merge(_.clone(StatementBloq, true), {

    name: 'mStarterMove',
    bloqClass: 'bloq-mstarter-move',
    content: [
        [{
            id: 'MOVEMENT',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-mbot-move-forward',
                value: '1'
            }, {
                label: 'bloq-mbot-move-backward',
                value: '2'
            }, {
                label: 'bloq-mbot-move-turnright',
                value: '3'
            }, {
                label: 'bloq-mbot-move-turnleft',
                value: '4'
            }]
        }, {
            alias: 'text',
            value: 'bloq-mbot-move-speed'
        }, {
            id: 'SPEED',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-mbot-move-speed-fast',
                value: '255'
            }, {
                label: 'bloq-mbot-move-speed-normal',
                value: '100'
            }, {
                label: 'bloq-mbot-move-speed-slow',
                value: '50'
            }]
        }]
    ],
    code: '',
    arduino: {
        includes: ['BitbloqMStarter.h'],
        needInstanceOf: [{
            name: 'robot',
            type: 'BitbloqMStarter'
        }],
        code: 'robot.move({MOVEMENT},{SPEED});'
    }
});

utils.preprocessBloq(mStarterMove);

module.exports = mStarterMove;