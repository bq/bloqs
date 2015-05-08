/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../../utils'),
    OutputBloq = require('./../../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'advancedRead',
    content: [
        [{
            alias: 'text',
            value: 'Leer'
        }, {
            bloqInputId: 'PIN',
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: '\'{PIN}\'.indexOf(\'A\') === 0 ? \'analogRead({PIN})\' : \'digitalRead({PIN})\''
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;