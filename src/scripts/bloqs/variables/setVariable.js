/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'setVariable',
    content: [
        [{
            alias: 'text',
            value: 'Variable'
        }, {
            id: 'NAME',
            alias: 'dynamicDropdown',
            options: 'variables'
        }, {
            alias: 'text',
            value: '='
        }, {
            bloqInputId: 'VALUE',
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: '{NAME} = {VALUE};'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;