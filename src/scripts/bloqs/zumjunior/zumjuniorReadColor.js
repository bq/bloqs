/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    OutputBloq = require('./../outputBloq');

/**
 * Bloq name: zumjuniorReadColor
 *
 * Bloq type: Output
 *
 * Description: It returns the read of zumjunior color
 *
 * Return type: bool
 */

var zumjuniorReadColor = _.merge(_.clone(OutputBloq, true), {

    name: 'zumjuniorReadColor',
    bloqClass: 'bloq-zumjunior-read-color',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zumjunior-read-readcomponent'
        }, {
            id: 'COMPONENT',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-zumjunior-color-red',
                value: '0'
            }, {
                label: 'bloq-zumjunior-color-green',
                value: '1'
            }, {
                label: 'bloq-zumjunior-color-blue',
                value: '2'
            }]
        }, {
            alias: 'text',
            value: 'bloq-zumjunior-of-color-sensor'
        },{
            id: 'MULTI',
            alias: 'dynamicDropdown',
            options: 'zumjuniorSensors',
        }]
    ],
    code: 'color{MULTI}.getComponent({COMPONENT})',
    returnType: {
        type: 'simple',
        value: 'float'
    },
    arduino: {
        code: 'color{MULTI}.getComponent({COMPONENT})'
    }
});

utils.preprocessBloq(zumjuniorReadColor);

module.exports = zumjuniorReadColor;
