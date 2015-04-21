/*global require */
'use strict';

var _ = require('lodash');
var OutputBloq = require('./basic/outputBloq');

var bloq = _.merge(Object.create(OutputBloq), {

    name: 'pinRead',
    content: [
        [{
            alias: 'text',
            value: 'Leer el pin'
        }, {
            alias: 'dropdown',
            value: ['digital', 'analógico']
        }, {
            alias: 'dropdown',
            value: ['Seleccionar']
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;
