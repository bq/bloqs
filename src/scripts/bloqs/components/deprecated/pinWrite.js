/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../../utils'),
    StatementBloq = require('./../../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'pinWriteAdvanced',
    bloqClass: 'bloq-pin-writte-advanced',
    content: [
        [{
            alias: 'text',
            value: 'bloq-pin-writte-advanced-writepin'
        }, {
            bloqInputId: 'PIN',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'bloq-pin-writte-advanced-data'
        }, {
            bloqInputId: 'DATA',
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: '\'{PIN}\'.indexOf(\'A\') === 0 ? \'analogWrite({PIN},{DATA});\' : \'digitalWrite({PIN},{DATA});\''

});

utils.generateBloqInputConnectors(bloq);


module.exports = bloq;