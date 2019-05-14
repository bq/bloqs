/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    OutputBloq = require('./../outputBloq');

/**
 * Bloq name: substring
 *
 * Bloq type: Output
 *
 * Description:
 *
 * Return type:
 */

var substring = _.merge(_.clone(OutputBloq, true), {
    name: 'substring',
    bloqClass: 'bloq-string',
    content: [
        [
            {
                alias: 'text',
                value: 'bloq-extract-text-from',
            },
            {
                id: 'STRING',
                alias: 'dynamicDropdown',
                options: 'softwareVars',
            },
            {
                alias: 'text',
                value: 'starting-at-position',
            },
            {
                id: 'FROM',
                alias: 'numberInput',
                value: 0,
            },
            {
                alias: 'text',
                value: 'and-ending-at-position',
            },
            {
                id: 'TO',
                alias: 'numberInput',
                value: 3,
            },
        ],
    ],
    returnType: {
        type: 'simple',
        value: 'String',
    },
    arduino: {
        code: '{STRING}.substring({FROM}, {TO})',
    },
});

utils.preprocessBloq(substring);

module.exports = substring;
