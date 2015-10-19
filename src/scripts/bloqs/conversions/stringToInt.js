/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    OutputBloq = require('./../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'stringToInt',
    bloqClass: 'bloq-string-to-int',
    content: [
        [{
            alias: 'text',
            value: 'bloq-string-to-int'
        }, {
            bloqInputId: 'VAR',
            alias: 'bloqInput',
            acceptType: 'String'
        }]
    ],
    code: '{VAR}.toInt()',
    returnType: {
        type: 'simple',
        value: 'int'
    }
});

utils.generateBloqInputConnectors(bloq);


module.exports = bloq;