/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'includeLib',
    bloqClass: 'bloq-include-lib',
    content: [
        [{
            alias: 'text',
            value: 'bloq-include-lib-exec'
        }, {
            id: 'LIB',
            alias: 'dynamicDropdown',
            options: 'libraries'
        }]
    ],
    code: '#include "{LIB}";'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;
