/*global require */
'use strict';

var _ = require('lodash');
var OutputBloq = require('./../../outputBloq');

var bloq = _.merge(Object.create(OutputBloq), {

    name: 'SwVariableAdvanced',
    content: [
        [{
            alias: 'text',
            value: 'Variable (software)'
        }, {
            alias: 'dropdown',
            options: ['Seleccionar']
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;
