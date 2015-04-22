/*global require */
'use strict';

var _ = require('lodash');
var OutputBloq = require('./../outputBloq');

var bloq = _.merge(Object.create(OutputBloq), {

    name: 'array',
    content: [
        [{
            alias: 'text',
            value: '[3] {'
        }, {
            alias: 'numberInput',
            value: 0
        }, {
            alias: 'text',
            value: ','
        }, {
            alias: 'numberInput',
            value: 0
        }, {
            alias: 'text',
            value: ','
        }, {
            alias: 'numberInput',
            value: 0
        }, {
            alias: 'text',
            value: '}'
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;
