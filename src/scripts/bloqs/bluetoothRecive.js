/*global require */
'use strict';

var _ = require('lodash');
var OutputBloq = require('./basic/outputBloq');

var bloq = _.merge(Object.create(OutputBloq), {

    name: 'bluetoothRecive',
    content: [
        [{
            alias: 'text',
            value: 'Bluetooth: recibir'
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;
