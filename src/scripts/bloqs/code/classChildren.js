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
        }, {
            alias: 'text',
            value: 'bloq-class-inheritance-type'
        }, {
            id: 'TYPE',
            alias: 'staticDropdown',
            options: [{
                    label: 'bloq-class-inheritance-public',
                    value: 'public'
                }, {
                    label: 'bloq-class-inheritance-protected',
                    value: 'protected'
                }, {
                    label: 'bloq-class-inheritance-private',
                    value: 'private'
                }]
        }, {
            alias: 'text',
            value: 'bloq-class-from'
        }, {
            id: 'PARENT',
            alias: 'dynamicDropdown',
            options: 'classes'
        }]
    ],
    createDynamicContent: 'classes',
    code: 'class {NAME} : public {PARENT}{{STATEMENTS}};',
    hCode: 'class {NAME}: public {PARENT}{{STATEMENTS}};',
    cppCode: ''

});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;