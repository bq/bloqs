/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'lcdTurnOnOff',
    content: [
        [{
            id:'STATE',
            alias: 'dropdown',
            options: [{label:'Encender', value: 'HIGH'}, {label:'Apagar', value:'LOW'}]
        }, {
            alias: 'text',
            value: 'Encender la luz del LCD'
        }, {
            id:'LCD',
            alias: 'dropdown',
            options: 'LCDs'
        }]
    ],
    code: '{LCD}.setBacklight({STATE});'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;