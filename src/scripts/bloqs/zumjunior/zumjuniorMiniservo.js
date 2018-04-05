/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    StatementBloq = require('./../statementBloq');

/**
 * Bloq name: zumjuniorMiniservo
 *
 * Bloq type: Statement
 *
 * Description: It sets zumjunior mini servo degrees
 *
 * Return type: none
 */

var zumjuniorMiniservo = _.merge(_.clone(StatementBloq, true), {

    name: 'zumjuniorMiniservo',
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
            id: 'POSITION',
            alias: 'numberInput',
            value: 90
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

utils.preprocessBloq(zumjuniorMiniservo);

module.exports = zumjuniorMiniservo;
