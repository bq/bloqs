/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../build-utils'),
    StatementBloq = require('./../../statementBloq');

/**
 * Bloq name: zumjuniorDisplayNumber
 *
 * Bloq type: Statement
 *
 * Description: It sets zumjunior 7segment to display number from variable
 *
 * Return type: none
 */

var zumjuniorDisplayNumberAdvanced = _.merge(_.clone(StatementBloq, true), {

    name: 'zumjuniorDisplayNumberAdvanced',
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

utils.preprocessBloq(zumjuniorDisplayNumberAdvanced);

module.exports = zumjuniorDisplayNumberAdvanced;
