/* global require */



let _ = require('lodash'),
  utils = require('./../build-utils'),
  StatementInputBloq = require('./../statementInputBloq');

/**
 * Bloq name: zumjuniorButtonIf
 *
 * Bloq type: Statement-Input
 *
 * Description: It executes the following code if button is pushed
 *
 * Return type: none
 */

let zumjuniorButtonIf = _.merge(_.clone(StatementInputBloq, true), {

  name: 'zumjuniorButtonIf',
  bloqClass: 'bloq-zumjunior-button-if',
  content: [
    [{
      alias: 'text',
      value: 'bloq-zumjunior-button-if',
    }, {
      id: 'BUTTON',
      alias: 'dynamicDropdown',
      options: 'zumjuniorButtons',
    }, {
      alias: 'text',
      value: 'bloq-zumjunior-button-is',
    }, {
      id: 'IS_PRESSED',
      alias: 'staticDropdown',
      options: [{
        label: 'bloq-zumjunior-button-pressed',
        value: 'digitalRead',
      }, {
        label: 'bloq-zumjunior-button-notpressed',
        value: '!digitalRead',
      }],
    }, {
      alias: 'text',
      value: 'bloq-zumjunior-button-exec',
    }],
  ],
  suggestedBloqs: ['else'],
  code: 'if({IS_PRESSED}({BUTTON}Pin)){{STATEMENTS}}',
  arduino: {
    code: 'if({IS_PRESSED}({BUTTON}Pin)){{STATEMENTS}}',
  },
});

utils.preprocessBloq(zumjuniorButtonIf);

zumjuniorButtonIf.connectors[1].acceptedAliases = ['all', 'ifDown'];

module.exports = zumjuniorButtonIf;
