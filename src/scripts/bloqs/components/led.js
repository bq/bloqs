/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'LED',
    content: [
        [{
            id: 'STATE',
            alias: 'dropdown',
            options: [{label:'Encender', value:'HIGH'}, {label:'Apagar', value:'LOW'}]
        }, {
            alias: 'text',
            value: 'el LED'
        }, {
            id: 'LED',
            alias: 'dropdown',
            options: 'LEDs'
        }]
    ],
    code: 'digitalWrite({LED},{STATE});'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;