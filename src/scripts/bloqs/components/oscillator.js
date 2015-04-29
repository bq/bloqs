/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'oscillator',
    content: [
        [{
            alias: 'text',
            value: 'Oscilar servo'
        }, {
            id:'OSCILLATOR',
            alias: 'dropdown',
            options: [{label: 'OSCILLATOR 1', value: 'osc1'},{label: 'OSCILLATOR 2', value: 'osc2'}]
        }, {
            alias: 'text',
            value: 'alrededor de'
        }, {
            bloqInputId:'PHASE',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'con amplitud'
        }, {
            bloqInputId:'AMPLITUDE',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'con velocidad'
        }, {
            bloqInputId:'SPEED',
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: '{OSCILLATOR}.refresh({PHASE},{AMPLITUDE},{SPEED})'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;