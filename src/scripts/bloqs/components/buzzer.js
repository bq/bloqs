/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'buzzer',
    content: [
        [{
            alias: 'text',
            value: 'Sonar el buzzer'
        }, {
            id: 'BUZZER',
            alias: 'dropdown',
            options: 'buzzers'
        }, {
            alias: 'text',
            value: 'con la nota'
        }, {
            id: 'NOTE',
            alias: 'dropdown',
            options: [{label:'Do',value:'261'}, {label:'Re',value:'293'}, {label:'Mi',value:'329'}, {label:'Fa',value:'349'}, {label:'Sol',value:'392'}, {label:'La',value:'440'}, {label:'Si',value:'494'}]
        }, {
            alias: 'text',
            value: 'durante'
        }, {
            id: 'SECONDS',
            alias: 'numberInput',
            value: 0
        }, {
            alias: 'text',
            value: 'ms'
        }]
    ],
    code: 'tone({BUZZER},{NOTE},{SECONDS});\ndelay({SECONDS});'
});
utils.generateBloqInputConnectors(bloq);

module.exports = bloq;