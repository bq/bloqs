/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../build-utils'),
    StatementBloq = require('./../../statementBloq');

/**
 * Bloq name: zumjuniorDisplayCharsAdvanced
 *
 * Bloq type: Statement
 *
 * Description: It sets zumjunior 7segment to display number from variable
 *
 * Return type: none
 */

var zumjuniorDisplayCharsAdvanced = _.merge(_.clone(StatementBloq, true), {

    name: 'zumjuniorDisplayCharsAdvanced',
    bloqClass: 'bloq-zumjunior-display-number',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zumjunior-display-chars-advanced'
        }, {
            bloqInputId: 'VALUE',
            alias: 'bloqInput',
            acceptType: ['all'],
            suggestedBloqs: ['string', 'selectVariable']
        }, {
            alias: 'text',
            value: 'bloq-zumjunior-in-display-name'
        },{
            id: 'DISPLAY',
            alias: 'dynamicDropdown',
            options: 'zumjunior7segments',
          }]
    ],
    code: '{DISPLAY}.displayString({VALUE});',
    arduino: {
        code: '{DISPLAY}.displayString({VALUE});'
    }
});

utils.preprocessBloq(zumjuniorDisplayCharsAdvanced);

module.exports = zumjuniorDisplayCharsAdvanced;
