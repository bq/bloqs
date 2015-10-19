/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'rgbLed',
    bloqClass: 'bloq-rgbLed',
    content: [
        [{
            alias: 'text',
            value: 'bloq-rgbLed'
        }, {
            id: 'LED',
            alias: 'dynamicDropdown',
            options: 'leds'
        }, {
            alias: 'text',
            value: 'bloq-rgbLed-red'
        }, {
            id: 'RED',
            alias: 'numberInput',
            value: 0
        }, {
            alias: 'text',
            value: 'bloq-rgbLed-green'
        }, {
            id: 'GREEN',
            alias: 'numberInput',
            value: 0
        }, {
            alias: 'text',
            value: 'bloq-rgbLed-blue'
        }, {
            id: 'BLUE',
            alias: 'numberInput',
            value: 0
        }]
    ],
    code: '{LED}.setRGBcolor({RED},{GREEN},{BLUE});'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;