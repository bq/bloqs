/*--IN PROGRESS--*/

/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../build-utils'),
    OutputBloq = require('./../../outputBloq');

/**
* Bloq name: mathBinaryOperations
*
* Bloq type: Output
*
* Description: It returns the result of the math operation between two given numbers.
*
* Return type: float
*/

var mathBinaryOperations = _.merge(_.clone(OutputBloq, true), {

    name: 'mathBinaryOperations',
    bloqClass: 'bloq-math-binary-operations',
    content: [
        [{
            bloqInputId: 'ARG1',
            alias: 'bloqInput',
            acceptType: 'float'
        }, {
            id: 'OPERATOR',
            alias: 'staticDropdown',
            options: [{
                    label: '^',
                    value: '^'
                }, {
                    label: '%',
                    value: '%'
                }]
        }, {
            bloqInputId: 'ARG2',
            alias: 'bloqInput',
            acceptType: 'float'
        }]
    ],
    code: '\'{OPERATOR}\' === \'^\'? \'pow({ARG1},{ARG2})\' : \'({ARG1} {OPERATOR} {ARG2})\'',
    returnType: {
        type: 'simple',
        value: 'float'
    }
});

utils.generateBloqInputConnectors(mathBinaryOperations);


module.exports = mathBinaryOperations;
