/*global define */
'use strict';

var $ = require('jquery');
var Bloq = require('./bloq');

var VariableSetDeclare = require('./bloqs/VariableSetDeclare');

var $field = $('#field');
var bloq1 = new Bloq({
    bloqData: VariableSetDeclare,
    dragRestrict: '#field'
});
var bloq2 = new Bloq({
    bloqData: VariableSetDeclare,
    dragRestrict: '#field'
});

$field.append(bloq1);
$field.append(bloq2);

console.log(bloq1);
bloq1.css({
    top: '200px',
    left: '200px'
});
