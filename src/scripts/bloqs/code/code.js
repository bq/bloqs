/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'code',
    bloqClass: 'bloq-code',
    content: [
        [{
            id: 'CODE',
            alias: 'multilineCodeInput',
            value: '',
            placeholder: 'bloq-code-writeYourCode'
        }]
    ],
    code: '{CODE}'
});
utils.generateBloqInputConnectors(bloq);
module.exports = bloq;;