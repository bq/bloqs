/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'serialSend',
    bloqClass: 'bloq-serial-send',
    content: [
        [{
            id: 'SERIAL',
            alias: 'dynamicDropdown',
            options: 'serialElements'
        }, {
            alias: 'text',
            value: 'bloq-serial-send-send'
        }, {
            bloqInputId: 'DATA',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            id: 'FUNCTION',
            alias: 'staticDropdown',
            options: [ {
                label: 'bloq-serial-send-println',
                value: 'println'
            }, {
                label: 'bloq-serial-send-print',
                value: 'print'
            }]
        }]
    ],
    code: '{SERIAL}.{FUNCTION}({DATA});'
});
utils.generateBloqInputConnectors(bloq);

module.exports = bloq;