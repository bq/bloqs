/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'continuousServoStop',
    content: [
        [{
            alias: 'text',
            value: 'Parar servo'
        }, {
            id: 'SERVO',
            alias: 'dropdown',
            options: 'contServos'
        }]
    ],
    code: '{SERVO}.write(90);'
});

utils.generateBloqInputConnectors(bloq);


module.exports = bloq;