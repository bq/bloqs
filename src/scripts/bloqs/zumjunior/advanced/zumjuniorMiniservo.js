/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../build-utils'),
    StatementBloq = require('./../../statementBloq');

/**
 * Bloq name: zumjuniorMiniservo
 *
 * Bloq type: Statement
 *
 * Description: It sets zumjunior mini servo degrees
 *
 * Return type: none
 */

var zumjuniorMiniservoAdvanced = _.merge(_.clone(StatementBloq, true), {

    name: 'zumjuniorMiniservoAdvanced',
    bloqClass: 'bloq-zumjunior-miniservo',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zumjunior-miniservo-move'
        }, {
            id: 'SERVO',
            alias: 'dynamicDropdown',
            options: 'zumjuniorMiniservos'
        }, {
            alias: 'text',
            value: 'bloq-zumjunior-miniservo-to'
        }, {
            bloqInputId: 'POSITION',
            alias: 'bloqInput',
            acceptType: ['all'],
            suggestedBloqs: ['number', 'selectVariable']
        }, {
            alias: 'text',
            value: 'bloq-zumjunior-miniservo-degrees'
        }]
    ],
    code: '{SERVO}.write({POSITION});',
    arduino: {
        code: '{SERVO}.write({POSITION});'
    }
});

utils.preprocessBloq(zumjuniorMiniservoAdvanced);

module.exports = zumjuniorMiniservoAdvanced;
