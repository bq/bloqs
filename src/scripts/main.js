'use strict';

var $ = require('jquery');
var Bloq = require('./bloq');

var ledSchema = require('./bloqs/components/led');
var servoSchema = require('./bloqs/components/servo');
var buzzerSchema = require('./bloqs/components/buzzer');
var oscillatorStartSchema = require('./bloqs/components/oscillatorStart');
var lcdWriteSchema = require('./bloqs/components/lcdWrite');

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

var bloq4 = new Bloq({
    bloqData: oscillatorStartSchema
});

var bloq5 = new Bloq({
    bloqData: lcdWriteSchema
});

$field.append(bloq1);
$field.append(bloq2);
$field.append(bloq3);
$field.append(bloq4);
$field.append(bloq5);

console.log(bloq1);
bloq1.css({
    top: '200px',
    left: '200px'
});

bloq2.css({
    top: '300px',
    left: '300px'
});

bloq3.css({
    top: '400px',
    left: '400px'
});

bloq4.css({
    top: '500px',
    left: '500px'
});

bloq5.css({
    top: '600px',
    left: '500px'
});