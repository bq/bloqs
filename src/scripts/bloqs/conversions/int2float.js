/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    OutputBloq = require('./../outputBloq');

/**
 * Bloq name: int2float-v1
 *
 * Bloq type: Output
 *
 * Description: It converts the given int type value to float type.
 *
 * Return type: float
 */

var int2floatV1 = _.merge(_.clone(OutputBloq, true), {

    name: 'int2float-v1',
    bloqClass: 'bloq-int-2-float',
    content: [
        [{
            alias: 'text',
            value: 'convertir int a float: '
        }, {
            bloqInputId: 'NUMBER',
            alias: 'bloqInput',
            acceptType: 'int'
        }]
    ],
    code: '(float) {NUMBER}',
    returnType: {
        type: 'simple',
        value: 'float'
    }
});

utils.generateBloqInputConnectors(int2floatV1);

module.exports = int2floatV1;