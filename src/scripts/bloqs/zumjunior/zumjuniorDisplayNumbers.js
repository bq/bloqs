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

var zumjuniorDisplayNumbers = _.merge(_.clone(StatementBloq, true), {

    name: 'zumjuniorDisplayNumbers',
    bloqClass: 'bloq-zumjunior-display-numbers',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zumjunior-display-numbers'
        }, {
            id: 'DIGIT1',
            alias: 'staticDropdown',
            options: [{
                label: '0',
                value: '0'
            }, {
                label: '1',
                value: '1'
            }, {
                label: '2',
                value: '2'
            }, {
                label: '3',
                value: '3'
            }, {
                label: '4',
                value: '4'
            }, {
                label: '5',
                value: '5'
            }, {
                label: '6',
                value: '6'
            }, {
                label: '7',
                value: '7'
            }, {
                label: '8',
                value: '8'
            }, {
                label: '9',
                value: '9'
            }, {
                label: 'bloq-zumjunior-display-none',
                value: ' '
            }]
        }, {
            id: 'DIGIT2',
            alias: 'staticDropdown',
            options: [{
                label: '0',
                value: '0'
            }, {
                label: '1',
                value: '1'
            }, {
                label: '2',
                value: '2'
            }, {
                label: '3',
                value: '3'
            }, {
                label: '4',
                value: '4'
            }, {
                label: '5',
                value: '5'
            }, {
                label: '6',
                value: '6'
            }, {
                label: '7',
                value: '7'
            }, {
                label: '8',
                value: '8'
            }, {
                label: '9',
                value: '9'
            }, {
                label: 'bloq-zumjunior-display-none',
                value: ' '
            }]
        }]
    ],
    code: 'segmentDisplay.displayChar(\'{DIGIT1}\',\'{DIGIT2}\');',
    arduino: {
        code: 'segmentDisplay.displayChar(\'{DIGIT1}\',\'{DIGIT2}\');'
    }
});

utils.preprocessBloq(zumjuniorDisplayNumbers);

module.exports = zumjuniorDisplayNumbers;
