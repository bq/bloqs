'use strict';

var $ = require('jquery');
var Bloq = require('./bloq');

var ledSchema = require('./bloqs/components/led');
var servoSchema = require('./bloqs/components/servo');
var buzzerSchema = require('./bloqs/components/buzzer');

var $field = $('#field');
var bloq1 = new Bloq({
    bloqData: ledSchema
});
var bloq2 = new Bloq({
    bloqData: servoSchema
});

var bloq3 = new Bloq({
    bloqData: buzzerSchema
});

$field.append(bloq1);
$field.append(bloq2);
$field.append(bloq3);

console.log(bloq1);
bloq1.css({
    top: '200px',
    left: '200px'
});

bloq1.css({
    top: '300px',
    left: '300px'
});
