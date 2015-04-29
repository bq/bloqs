/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'bluetoothSend',
    content: [
        [{
            id:'BLUETOOTH',
            alias: 'dropdown',
            options: [{label: 'BLUETOOTH 1', value: 'bluetooth1'},{label: 'BLUETOOTH 2', value: 'bluetooth2'}]
        }, {
            alias: 'text',
            value: ': enviar datos'
        }, {
            bloqInputId: 'DATA',
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: '{BLUETOOTH}.println({DATA});'
});
utils.generateBloqInputConnectors(bloq);

module.exports = bloq;