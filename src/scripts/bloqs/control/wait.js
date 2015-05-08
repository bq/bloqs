/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'wait',
    content: [
        [{
            alias: 'text',
            value: 'Esperar'
        }, {
            bloqInputId: 'TIME',
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: 'delay({TIME});'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;