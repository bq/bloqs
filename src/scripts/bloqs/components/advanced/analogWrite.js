/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../../utils'),
    StatementBloq = require('./../../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'analogWrite',
    bloqClass: 'bloq-pin-writte-advanced',
    content: [
        [{
            alias: 'text',
            value: 'bloq-pin-analog-write'
        }, {
            bloqInputId: 'PIN',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'bloq-pin-analog-write-data'
        }, {
            bloqInputId: 'DATA',
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: 'analogWrite({PIN},{DATA});'

});

utils.generateBloqInputConnectors(bloq);


module.exports = bloq;