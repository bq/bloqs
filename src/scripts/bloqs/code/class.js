/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementInputBloq = require('./../statementInputBloq');

var bloq = _.merge(_.clone(StatementInputBloq, true), {

    name: 'class',
    bloqClass: 'bloq-class',
    content: [
        [{
            alias: 'text',
            value: 'bloq-class'
        }, {
            id: 'NAME',
            alias: 'varInput',
            placeholder:'bloq-class-default'
        }]
    ],
    createDynamicContent: 'classes',
    code: 'class {NAME}{{STATEMENTS}};',
    hCode: 'class {NAME}{{STATEMENTS}};',
    cppCode: ''

});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;