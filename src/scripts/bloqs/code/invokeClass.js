/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    OutputBloq = require('./../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'invokeClass',
    bloqClass: 'bloq-invoke-class',
    content: [
        [{
            alias: 'text',
            value: 'bloq-invoke-class-exec'
        }, {
            id: 'CLASS',
            alias: 'dynamicDropdown',
            options: 'classes'
        }]
    ],

    code: '{CLASS}()',
    returnType: {
        type: 'simple',
        value: 'var'
    }
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;