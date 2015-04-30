/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    OutputBloq = require('./../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'serialReceive',
    content: [
        [{
            id:'SERIAL',
            alias: 'dropdown',
            options: 'serialElements'
        }, {
            alias: 'text',
            value: 'recibir'
        }]
    ],
    code: '{SERIAL}.read()'
});
utils.generateBloqInputConnectors(bloq);

module.exports = bloq;