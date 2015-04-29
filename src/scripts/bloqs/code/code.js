/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'code',
    content: [
        [{
            id:'CODE',
            alias: 'stringInput',
            value: '',
            placeholder: 'Escribe tu propio código'
        }]
    ],
    code: '{CODE}'
});
utils.generateBloqInputConnectors(bloq);
module.exports = bloq;