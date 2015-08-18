/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementInputBloq = require('./../statementInputBloq');

var bloq = _.merge(_.clone(StatementInputBloq, true), {

    name: 'protected',
    bloqClass: 'bloq-protected',
    content: [
        [{
            alias: 'text',
            value: 'bloq-protected'
        }]
    ],
    code: 'protected : {STATEMENTS}',
    hCode: 'protected : {STATEMENTS}',
    cppCode: ''
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;