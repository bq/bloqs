/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    StatementInputBloq = require('./../statementInputBloq');

/**
 * Bloq name: while
 *
 * Bloq type: Statement-Input
 *
 * Description: It repeats the following code until the condition is met.
 *
 * Return type: none
 */

var bloqWhile = _.merge(_.clone(StatementInputBloq, true), {

    name: 'while',
    bloqClass: 'bloq-while',
    content: [
        [{
            alias: 'text',
            value: 'bloq-while-while'
        }, {
            bloqInputId: 'ARG1',
            alias: 'bloqInput',
            acceptType: ['all'],
            suggestedBloqs: ['selectVariable', 'readSensor']
        }, {
            id: 'OPERATOR',
            alias: 'staticDropdown',
            options: [{
                    label: '=',
                    value: '=='
                }, {
                    label: '!=',
                    value: '!='
                }, {
                    label: '>',
                    value: '>'
                }, {
                    label: '>=',
                    value: '>='
                }, {
                    label: '<',
                    value: '<'
                }, {
                    label: '<=',
                    value: '<='
                }] //'=', '≠', '>', '≥', '<', '≤']
        }, {
            bloqInputId: 'ARG2',
            alias: 'bloqInput',
            acceptType: ['all'],
            suggestedBloqs: ['number', 'string', 'boolean', 'selectVariable', 'readSensor']
        }, {
            alias: 'text',
            value: 'bloq-while-exec'
        }]
    ],
    code: 'while ({ARG1} {OPERATOR} {ARG2}){{STATEMENTS}}',
    python: {
        codeLines: [{
            code: 'while ({ARG1} {OPERATOR} {ARG2}):'
        }, {
            indentation: 1,
            code: '{STATEMENTS}'
        }]
    },
    arduino: {
        code: 'while ({ARG1} {OPERATOR} {ARG2}){{STATEMENTS}}'
    }
});

utils.preprocessBloq(bloqWhile);

module.exports = bloqWhile;
