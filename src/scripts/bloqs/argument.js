/*global require */
'use strict';

var _ = require('lodash');
var OutputBloq = require('./basic/outputBloq');

var bloq = _.merge(Object.create(OutputBloq), {

    name: 'argument',
    content: [
        [{
            alias: 'text',
            value: 'Variable'
        }, {
            alias: 'dropdown',
            value: ['int', 'string']
        }, {
            alias: 'varInput',
            value: 'x'
        }]
    ]
});

module.exports = bloq;
