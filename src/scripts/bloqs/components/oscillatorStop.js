/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'oscillatorStop',
    content: [
        [{
            alias: 'text',
            value: 'Parar oscilador'
        }, {
            id: 'OSCILLATOR',
            alias: 'dropdown',
            options: 'Oscillators'
        }]
    ],
    code: '{OSCILLATOR}.stop()'

});
utils.generateBloqInputConnectors(bloq);

module.exports = bloq;