/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'led',
    content: [
        [{
            id: 'STATE',
            alias: 'staticDropdown',
            options: [{
                label: 'Encender',
                value: 'HIGH'
            }, {
                label: 'Apagar',
                value: 'LOW'
            }]
        }, {
            alias: 'text',
            value: 'el LED'
        }, {
            id: 'LED',
            alias: 'dynamicDropdown',
            options: 'leds'
        }]
    ],
    code: 'digitalWrite({LED},{STATE});'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;