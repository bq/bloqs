/*global require */
'use strict';

var _ = require('lodash');
var OutputBloq = require('./../../outputBloq');

var bloq = _.merge(Object.create(OutputBloq), {

    name: 'HwVariableAdvanced',
    content: [
        [{
            alias: 'text',
            value: 'Variable (componentes)'
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
