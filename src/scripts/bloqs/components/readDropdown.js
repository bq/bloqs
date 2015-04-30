/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    OutputBloq = require('./../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'readDropdown',
    content: [
        [{
            alias: 'text',
            value: 'Leer'
        }, {
            id: 'SENSOR',
            alias: 'dropdown',
            options: 'Sensors'//[{label:'ANALOG', value:'A0'}, {label:'DIGIT', value:'1'}]
        }]
    ],
    code:'\'{SENSOR}\'.indexOf(\'A\') === 0 ? \'analogRead({SENSOR})\' : \'digitalRead({SENSOR})\''
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;