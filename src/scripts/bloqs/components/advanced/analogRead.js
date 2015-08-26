/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../../utils'),
    OutputBloq = require('./../../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'analogReadAdvanced',
    bloqClass: 'bloq-analog-read-advanced',
    content: [
        [{
            alias: 'text',
            value: 'bloq-analog-read-advanced-readpin'
        }, {
            bloqInputId: 'PIN',
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: 'analogRead({PIN})\'',
    returnType: {
        type: 'simple',
        value: 'float'
    }
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;