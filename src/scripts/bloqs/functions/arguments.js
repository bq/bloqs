/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    OutputBloq = require('./../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'arguments',
    content: [
        [{
            bloqInputId: 'ARG1',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: ','
        }, {
            bloqInputId: 'ARG2',
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: '{ARG1},{ARG2}'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;