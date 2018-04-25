/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    StatementBloq = require('./../statementBloq');

/**
 * Bloq name: zumjuniorPlayBuzz
 *
 * Bloq type: Statement
 *
 * Description: It sets zumjunior buzz to play note for some time
 *
 * Return type: none
 */

var zumjuniorPlayBuzz = _.merge(_.clone(StatementBloq, true), {

    name: 'zumjuniorPlayBuzz',
    bloqClass: 'bloq-zumjunior-play-buzz',
    content: [
        [{
            alias: 'text',
            value: 'bloq-zumjunior-play-buzz'
        }, {
            id: 'NOTE',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-zumjunior-note-do',
                value: 'BQ::ZUMJunior::DO'
            }, {
                label: 'bloq-zumjunior-note-re',
                value: 'BQ::ZUMJunior::RE'
            }, {
                label: 'bloq-zumjunior-note-mi',
                value: 'BQ::ZUMJunior::MI'
            }, {
                label: 'bloq-zumjunior-note-fa',
                value: 'BQ::ZUMJunior::FA'
            }, {
                label: 'bloq-zumjunior-note-sol',
                value: 'BQ::ZUMJunior::SOL'
            }, {
                label: 'bloq-zumjunior-note-la',
                value: 'BQ::ZUMJunior::LA'
            }, {
                label: 'bloq-zumjunior-note-si',
                value: 'BQ::ZUMJunior::SI'
            }]
        }, {
            alias: 'text',
            value: 'bloq-zumjunior-play-for'
        }, {
            id: 'TIME',
            alias: 'numberInput',
            value: 2000
        }, {
            alias: 'text',
            value: 'bloq-zumjunior-play-ms'
        }]
    ],
    code: 'zumJunior.play({NOTE},{TIME});delay({TIME});',
    arduino: {
        code: 'zumJunior.play({NOTE},{TIME});delay({TIME});'
    }
});

utils.preprocessBloq(zumjuniorPlayBuzz);

module.exports = zumjuniorPlayBuzz;
