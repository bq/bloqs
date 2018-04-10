/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    StatementBloq = require('./../statementBloq');

/**
 * Bloq name: zumjuniorDisplayNumber
 *
 * Bloq type: Statement
 *
 * Description: It sets zumjunior 7segment to display number from variable
 *
 * Return type: none
 */

var zumjuniorDisplayNumber = _.merge(_.clone(StatementBloq, true), {

    name: 'zumjuniorDisplayNumber',
    bloqClass: 'bloq-zumjunior-display-number',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zumjunior-display-number'
        }, {
            bloqInputId: 'VALUE',
            alias: 'bloqInput',
            acceptType: ['all'],
            suggestedBloqs: ['number', 'selectVariable']
        }]
    ],
    code: 'segmentDisplay.displayInt({VALUE});',
    arduino: {
        code: 'segmentDisplay.displayInt({VALUE});'
    }
});

utils.preprocessBloq(zumjuniorDisplayNumber);

module.exports = zumjuniorDisplayNumber;
