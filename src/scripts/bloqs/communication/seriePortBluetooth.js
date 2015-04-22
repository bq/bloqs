/*global require */
'use strict';

var _ = require('lodash');
var StatementInputBloq = require('./../statementInputBloq');

var bloq = _.merge(Object.create(StatementInputBloq), {

    name: 'seriePortBluetooth',
    content: [
        [{
            alias: 'text',
            value: 'Bluetooth: puerto serie disponible'
        }, {
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'ejecutar:'
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;
