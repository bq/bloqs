/*global require */
'use strict';

var $ = require('jquery');
var Bloq = require('./bloq');

var statementBloq = require('./bloqs/statementBloq');
var setVariableBloq = require('./bloqs/setVariableBloq');

console.log('hi');
console.log(statementBloq);
console.log(setVariableBloq);

var $field = $('#field');
var bloq1 = new Bloq({
    bloqType: 'statementBloq'
});
console.log(bloq1);
$field.append(bloq1);
