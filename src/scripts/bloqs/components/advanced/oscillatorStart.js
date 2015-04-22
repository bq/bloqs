/*global require */
'use strict';

var _ = require('lodash');
var StatementBloq = require('./../../statementBloq');

var bloq = _.merge(Object.create(StatementBloq), {

    name: 'oscillatorStartAdvanced',
    content: [
        [{
            alias: 'text',
            value: 'Reproducir oscilador'
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
