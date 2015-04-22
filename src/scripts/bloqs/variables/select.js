/*global require */
'use strict';

var _ = require('lodash');
var OutputBloq = require('./../outputBloq');

var bloq = _.merge(Object.create(OutputBloq), {

    name: 'SelectVariable',
    content: [
        [{
            alias: 'text',
            value: 'Variable'
        }, {
            alias: 'dropdown',
            options: ['Seleccionar']
        }]
    ]
});

module.exports = bloq;
