/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    StatementBloq = require('./../statementBloq');

/**
 * Bloq name: zumjuniorClearDisplay
 *
 * Bloq type: Statement
 *
 * Description: It clears zumjunior 7 segment display
 *
 * Return type: none
 */

var zumjuniorClearDisplay = _.merge(_.clone(StatementBloq, true), {

    name: 'zumjuniorClearDisplay',
    bloqClass: 'bloq-zumjunior-clear-display',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zumjunior-clear-display'
        },{
            id: 'DISPLAY',
            alias: 'dynamicDropdown',
            options: 'zumjunior7segments',
          }]
    ],
    code: '{DISPLAY}.displayChar(\' \', \' \');',
    arduino: {
        code: '{DISPLAY}.displayChar(\' \', \' \');',
    }
});

utils.preprocessBloq(zumjuniorClearDisplay);

module.exports = zumjuniorClearDisplay;
