/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    OutputBloq = require('./../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'millis',
    bloqClass: 'bloq-millis',
    content: [
        [{
            alias: 'text',
            value: 'bloq-millis'
        }]
    ],
    code: 'millis()',
    returnType: {
        type: 'simple',
        value: 'float'
    }
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;