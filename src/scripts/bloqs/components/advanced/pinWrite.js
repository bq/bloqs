/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../../utils'),
    StatementBloq = require('./../../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'advancedPinWrite',
    content: [
        [{
            alias: 'text',
            value: 'Escribir en el pin'
        }, {
            bloqInputId: 'PIN',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'el dato'
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