/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'oscillatorStart',
    content: [
        [{
            alias: 'text',
            value: 'Reproducir oscilador'
        }, {
            id:'OSCILLATOR',
            alias: 'dropdown',
            options: 'Oscillator'
        }]
    ],
    code: '{OSCILLATOR}.start()'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;