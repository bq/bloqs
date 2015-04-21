/*global require */
'use strict';

var _ = require('lodash');
var OutputBloq = require('./basic/outputBloq');

var bloq = _.merge(Object.create(OutputBloq), {

    name: 'string',
    content: [
        [{
            alias: 'text',
            value: '"'
        }, {
            alias: 'stringInput',
            value: ''
        }, {
            alias: 'text',
            value: '"'
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;
