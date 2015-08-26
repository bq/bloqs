/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../../utils'),
    StatementBloq = require('./../../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'digitalWrite',
    bloqClass: 'bloq-pin-writte-advanced',
    content: [
        [{
            alias: 'text',
            value: 'bloq-pin-digital-write'
        }, {
            bloqInputId: 'PIN',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'bloq-pin-digital-write-data'
        }, {
            bloqInputId: 'DATA',
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: 'digitalWrite({PIN},{DATA});'

});

utils.generateBloqInputConnectors(bloq);


module.exports = bloq;