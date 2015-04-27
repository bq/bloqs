/*global require */
'use strict';

var _ = require('lodash');
var OutputBloq = require('./../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'basicOperations',
    content: [
        [{
            alias: 'bloqInput',
            name: 'firstParameter',
            acceptType: 'all'
        }, {
            alias: 'dropdown',
            options: ['+', '-', '×', '÷', '^']
        }, {
            alias: 'bloqInput',
            name: 'secondParameter',
            acceptType: 'all'
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

bloq.connectors.push({
    type: 'connector--input',
    accept: 'connector--output',
    name: 'firstParameter'

}, {
    type: 'connector--input',
    accept: 'connector--output',
    name: 'secondParameter'
});

module.exports = bloq;