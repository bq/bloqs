/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../build-utils'),
    OutputBloq = require('./../../outputBloq');

/**
 * Bloq name: substring
 *
 * Bloq type: Output
 *
 * Description:
 *
 * Return type:
 */

var substringAdvanced = _.merge(_.clone(OutputBloq, true), {
    name: 'substringAdvanced',
    bloqClass: 'bloq-string',
    content: [
        [
            {
                alias: 'text',
                value: 'bloq-zumjunior-button-if',
            },
            {
                bloqInputId: 'STRING',
                alias: 'bloqInput',
                acceptType: ['all'],
                suggestedBloqs: ['selectVariable'],
            },
            {
                alias: 'text',
                value: 'empezando en la posición',
            },
            {
                bloqInputId: 'FROM',
                alias: 'bloqInput',
                acceptType: ['all'],
                suggestedBloqs: ['number', 'selectVariable'],
            },
            {
                alias: 'text',
                value: 'y acabando en la posición',
            },
            {
                bloqInputId: 'TO',
                alias: 'bloqInput',
                acceptType: ['all'],
                suggestedBloqs: ['number', 'selectVariable'],
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

utils.preprocessBloq(substringAdvanced);

module.exports = substringAdvanced;
