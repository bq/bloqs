/* global require */


let _ = require('lodash'),
  utils = require('./../../build-utils'),
  OutputBloq = require('./../../outputBloq');

/**
 * Bloq name: mBotGetUS
 *
 * Bloq type: Output
 *
 *
 *
 * Return type: float
 */

const mBotGetUS = _.merge(_.clone(OutputBloq, true), {

  name: 'mBotGetUS',
  bloqClass: 'bloq-mbot-getdistance-v2',
  content: [
    [{
      alias: 'text',
      value: 'bloq-mbot-getdistance',
    }, {
      id: 'ULTRASOUND',
      alias: 'dynamicDropdown',
      options: 'mkb_ultrasound',
    }, {
      alias: 'text',
      value: 'in',
    }, {
      id: 'MAGNITUDE',
      alias: 'staticDropdown',
      options: [{
        label: 'cm',
        value: 'cm',
      }, {
        label: 'inches',
        value: 'inches',
      }],
    }],
  ],
  code: '',
  returnType: {
    type: 'simple',
    value: 'float',
  },
  arduino: {
    conditional: {
      aliasId: 'MAGNITUDE',
      code: {
        cm: '{ULTRASOUND}.readDistanceInCM()',
        inches: '{ULTRASOUND}.readDistanceInInches()',
      },
    },
  },
});
utils.preprocessBloq(mBotGetUS);

module.exports = mBotGetUS;
