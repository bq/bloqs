/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    OutputBloq = require('./../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'bluetoothReceive',
    content: [
        [{
            id:'BLUETOOTH',
            alias: 'dropdown',
            options: [{label: 'BLUETOOTH 1', value: 'bluetooth1'},{label: 'BLUETOOTH 2', value: 'bluetooth2'}]
        }, {
            alias: 'text',
            value: 'Bluetooth: recibir'
        }]
    ],
    code: '{BLUETOOTH}.read()'
});
utils.generateBloqInputConnectors(bloq);

module.exports = bloq;