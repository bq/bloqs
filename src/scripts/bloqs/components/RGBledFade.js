/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'rgbLedFade',
    bloqClass: 'bloq-rgbLed-fade',
    content: [
        [{
            alias: 'text',
            value: 'bloq-rgbLed-fade'
        }, {
            id: 'LED',
            alias: 'dynamicDropdown',
            options: 'leds'
        }, {
            alias: 'text',
            value: 'bloq-rgbLed-fade-red'
        }, {
            id: 'RED',
            alias: 'numberInput',
            value: 0
        }, {
            alias: 'text',
            value: 'bloq-rgbLed-fade-green'
        }, {
            id: 'GREEN',
            alias: 'numberInput',
            value: 0
        }, {
            alias: 'text',
            value: 'bloq-rgbLed-fade-blue'
        }, {
            id: 'BLUE',
            alias: 'numberInput',
            value: 0
        }]
    ],
    code: '{LED}.crossFade({RED},{GREEN},{BLUE});'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;