/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    StatementBloq = require('./../statementBloq');

/**
 * Bloq name: zumjuniorDisplayNumbers
 *
 * Bloq type: Statement
 *
 * Description: It sets zumjunior 7segment to display numbers
 *
 * Return type: none
 */

var zumjuniorDisplayChars = _.merge(_.clone(StatementBloq, true), {
    name: 'zumjuniorDisplayChars',
    bloqClass: 'bloq-zumjunior-display-number',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zumjunior-display-chars'
        }, {
            id: 'CHAR1',
            alias: 'charInput',
            value: 'A'
        }, {
            id: 'CHAR2',
            alias: 'charInput',
            value: '0'
        }]
    ],
    code: 'segmentDisplay.displayChar(\'{CHAR1}\',\'{CHAR2}\');',
    arduino: {
        code: 'segmentDisplay.displayChar(\'{CHAR1}\',\'{CHAR2}\');'
    }
});

utils.preprocessBloq(zumjuniorDisplayChars);

module.exports = zumjuniorDisplayChars;
