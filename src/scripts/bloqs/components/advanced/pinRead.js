/*global require */
'use strict';

var _ = require('lodash');
var OutputBloq = require('./../../outputBloq');

var bloq = _.merge(Object.create(OutputBloq), {

    name: 'pinReadAdvanced',
    content: [
        [{
            alias: 'text',
            value: 'Leer el pin'
        }, {
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;
