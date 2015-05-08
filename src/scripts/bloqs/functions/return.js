/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    OutputBloq = require('./../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'return',
    content: [
        [{
            alias: 'text',
            value: 'devuelve'
        }, {
            bloqInputId: 'RETURN',
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: 'return {RETURN};'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;