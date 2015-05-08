/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'invokeFunction',
    content: [
        [{
            alias: 'text',
            value: 'Ejecutar'
        }, {
            id: 'FUNCTION',
            alias: 'dynamicDropdown',
            options: 'voidFunctions'
        }]
    ],
    code: '{FUNCTION}({FUNCTION.args});'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;