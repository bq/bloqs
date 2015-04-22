/*global require */
'use strict';

var _ = require('lodash');
var OutputBloq = require('./../outputBloq');

var bloq = _.merge(Object.create(OutputBloq), {

    name: 'equalityOperations',
    content: [
        [{
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'dropdown',
            options: ['=', '≠', '>', '≥', '<', '≤']
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
