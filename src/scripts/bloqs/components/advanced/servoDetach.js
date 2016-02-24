//--IN PROGRESS--//

/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../build-utils'),
    StatementBloq = require('./../../statementBloq');

/**
 * Bloq name: servoDetach
 * 
 * Bloq type: Statement
 *
 * Description: It detach a servo.
 * 
 * Return type: none
 */

var servoDetach = _.merge(_.clone(StatementBloq, true), {

    name: 'servoDetach',
    bloqClass: 'bloq-servo-detach',
    content: [
        [{
            alias: 'text',
            value: 'bloq-servo-detach'
        }, {
            id: 'SERVO',
            alias: 'dynamicDropdown',
            options: 'allServos'
        }]
    ],
    code: '{SERVO}.detach();'
});

utils.generateBloqInputConnectors(servoDetach);

module.exports = servoDetach;