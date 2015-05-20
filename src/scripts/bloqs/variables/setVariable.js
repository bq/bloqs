/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'setVariable',
    bloqClass: 'bloq-set-variable',
    content: [
        [{
            alias: 'text',
            value: 'Variable'
        }, {
            id: 'NAME',
            alias: 'dynamicDropdown',
            options: 'softwareVars'
        }, {
            alias: 'text',
            value: '='
        }, {
            bloqInputId: 'VALUE',
            alias: 'bloqInput',
            acceptType: {
                type: 'fromDynamicDropdown',
                idDropdown: 'NAME',
                options: 'softwareVars'
            }
        }]
    ],
    code: '{NAME} = {VALUE};'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;