/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    OutputBloq = require('./../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'invokeArgumentsClass',
    bloqClass: 'bloq-invoke-arguments-class',
    content: [
        [{
            alias: 'text',
            value: 'bloq-invoke-arguments-class'
        }, {
            id: 'CLASS',
            alias: 'dynamicDropdown',
            options: 'classes'
        }, {
            alias: 'text',
            value: 'bloq-invoke-arguments-args'
        }, {
            bloqInputId: 'ARGS',
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: '{CLASS}({ARGS});',
    returnType: {
        type: 'simple',
        value: 'var'
    }
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;