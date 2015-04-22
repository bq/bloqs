/*global require */
'use strict';

var _ = require('lodash');
var OutputBloq = require('./../../outputBloq');

var bloq = _.merge(Object.create(OutputBloq), {

    name: 'TurnOnOffAdvanced',
    content: [
        [{
            alias: 'dropdown',
            options: ['Encender', 'Apagar']
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;
