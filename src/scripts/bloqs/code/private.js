/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementInputBloq = require('./../statementInputBloq');

var bloq = _.merge(_.clone(StatementInputBloq, true), {

    name: 'private',
    bloqClass: 'bloq-private',
    content: [
        [{
            alias: 'text',
            value: 'bloq-private'
        }]
    ],
    code: 'private : {STATEMENTS}',
    hCode: 'private : {STATEMENTS}',
    cppCode: ''

});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;