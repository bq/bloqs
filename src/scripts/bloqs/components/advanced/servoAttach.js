//--IN PROGRESS--//

/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../build-utils'),
    StatementBloq = require('./../../statementBloq');

/**
 * Bloq name: servoAttach
 * 
 * Bloq type: Statement
 *
 * Description: It attach a servo in order to be handled.
 * 
 * Return type: none
 */

var servoAttach = _.merge(_.clone(StatementBloq, true), {

    name: 'servoAttach',
    bloqClass: 'bloq-servo-attach',
    content: [
        [{
            alias: 'text',
            value: 'bloq-servo-attach'
        }, {
            id: 'SERVO',
            alias: 'dynamicDropdown',
            options: 'allServos'
        }]
    ],
    code: '{SERVO}.attach({SERVO.pin});'
});

utils.generateBloqInputConnectors(servoAttach);

module.exports = servoAttach;