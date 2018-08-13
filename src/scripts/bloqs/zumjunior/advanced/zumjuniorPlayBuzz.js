/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../build-utils'),
    StatementBloq = require('./../../statementBloq');

/**
 * Bloq name: zumjuniorPlayBuzzAdvanced
 *
 * Bloq type: Statement
 *
 * Description: It sets zumjunior buzz to play note for some time
 *
 * Return type: none
 */

var zumjuniorPlayBuzzAdvanced = _.merge(_.clone(StatementBloq, true), {

    name: 'zumjuniorPlayBuzzAdvanced',
    bloqClass: 'bloq-zumjunior-play-buzz-advanced',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zumjunior-play-buzz'
        }, {
            bloqInputId: 'NOTE',
            alias: 'bloqInput',
            acceptType: ['all'],
            suggestedBloqs: ['number', 'selectVariable']
        }, {
            alias: 'text',
            value: 'bloq-zumjunior-play-for'
        }, {
            bloqInputId: 'TIME',
            alias: 'bloqInput',
            acceptType: ['all'],
            suggestedBloqs: ['number', 'selectVariable']
        }, {
            alias: 'text',
            value: 'bloq-zumjunior-play-ms'
        }]
    ],
    code: 'zumJunior.playTone({NOTE},{TIME});delay({TIME});',
    arduino: {
        code: 'zumJunior.playTone({NOTE},{TIME});delay({TIME});'
    }
});

utils.preprocessBloq(zumjuniorPlayBuzzAdvanced);

module.exports = zumjuniorPlayBuzzAdvanced;
