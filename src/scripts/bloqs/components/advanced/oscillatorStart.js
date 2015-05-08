/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../../utils'),
    StatementBloq = require('./../../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'advancedOscillatorStart',
    content: [
        [{
            alias: 'text',
            value: 'Reproducir oscilador'
        }, {
            bloqInputId: 'OSCILLATOR',
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: '{OSCILLATOR}.start()'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;