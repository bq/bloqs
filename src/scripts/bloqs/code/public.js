/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementInputBloq = require('./../statementInputBloq');

var bloq = _.merge(_.clone(StatementInputBloq, true), {

    name: 'public',
    bloqClass: 'bloq-public',
    content: [
        [{
            alias: 'text',
            value: 'bloq-public'
        }]
    ],
    code: 'public : {STATEMENTS}',
    hCode: 'public : {STATEMENTS}',
    cppCode: ''

});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;