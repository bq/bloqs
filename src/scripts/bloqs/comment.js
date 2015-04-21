/*global require */
'use strict';

var _ = require('lodash');
var StatementBloq = require('./basic/statementBloq');

var bloq = _.merge(Object.create(StatementBloq), {

    name: 'comment',
    content: [
        [{
            alias: 'text',
            value: 'Comentario //'
        }, {
            alias: 'stringInput',
            value: ''
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;
