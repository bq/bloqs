/*global require */
'use strict';

var _ = require('lodash');
var StatementBloq = require('./../../statementBloq');

var bloq = _.merge(Object.create(StatementBloq), {

    name: 'continuousServoStartAdvanced',
    content: [
        [{
            alias: 'text',
            value: 'Girar servo'
        }, {
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'en sentido'
        }, {
            alias: 'dropdown',
            options: ['horario', 'antihorario']
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});


module.exports = bloq;
