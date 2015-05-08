/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../../utils'),
    StatementBloq = require('./../../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'advancedOscillatorStop',
    content: [
        [{
            alias: 'text',
            value: 'Parar oscilador'
        }, {
            bloqInputId: 'OSCILLATOR',
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: '{OSCILLATOR}.stop()'

});
utils.generateBloqInputConnectors(bloq);

module.exports = bloq;