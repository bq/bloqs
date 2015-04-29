/*global require */
'use strict';

var _ = require('lodash');
var StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'comment',
    content: [
        [{
            alias: 'text',
            value: 'Comentario //'
        }, {
            id: 'COMMENT',
            alias: 'stringInput',
            value: ''
        }]
    ],
    code: '/*\n{COMMENT}\n*/'
});

module.exports = bloq;