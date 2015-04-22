/*global require */
'use strict';

var _ = require('lodash');
var OutputBloq = require('./../outputBloq');

var bloq = _.merge(Object.create(OutputBloq), {

    name: 'Argument',
    content: [
        [{
            alias: 'text',
            value: 'variable'
        }, {
            alias: 'dropdown',
            options: ['int', 'string', 'boolean']
        }, {
            alias: 'varInput',
            value: 'x'
        }]
    ]
});

module.exports = bloq;
