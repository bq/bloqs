/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../../utils'),
    StatementInputBloq = require('./../../statementInputBloq');

var bloq = _.merge(_.clone(StatementInputBloq, true), {

    name: 'for',
    bloqClass: 'bloq-for deprecated',
    content: [
        [{
            alias: 'text',
            value: 'bloq-for-count'
        }, {
            id: 'VAR',
            alias: 'dynamicDropdown',
            options: 'softwareVars'
        }, {
            alias: 'text',
            value: 'bloq-for-from'
        }, {
            id: 'INIT',
            alias: 'numberInput',
            value: 0
        }, {
            alias: 'text',
            value: 'bloq-for-to'
        }, {
            id: 'FINAL',
            alias: 'numberInput',
            value: 10
        }, {
            id: 'MODE',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-for-add',
                value: '++'
            }, {
                label: 'bloq-for-subtract',
                value: '--'
            }]
        }, {
            alias: 'text',
            value: 'bloq-for-exec'
        }]
    ],
    code: 'for({VAR}={INIT};{VAR}<{FINAL};{VAR}{MODE}){{STATEMENTS}}'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;