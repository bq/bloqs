'use strict';

var $ = require('jquery');
var Bloq = require('./bloq');

var ledSchema = require('./bloqs/components/led');
var servoSchema = require('./bloqs/components/servo');
var buzzerSchema = require('./bloqs/components/buzzer');
var oscillatorStartSchema = require('./bloqs/components/oscillatorStart');
var lcdWriteSchema = require('./bloqs/components/lcdWrite');
var declareSchema = require('./bloqs/variables/declare');
var selectSchema = require('./bloqs/variables/select');
var arrayVariableSchema = require('./bloqs/variables/arrayVariable');
var basicOperationsSchema = require('./bloqs/mathematics/basicOperations');




var $field = $('#field');

var bloq1 = new Bloq({
    bloqData: ledSchema
});
$field.append(bloq1);
bloq1.css({
    top: '200px',
    left: '200px'
});


var bloq2 = new Bloq({
    bloqData: servoSchema
});
$field.append(bloq2);
bloq2.css({
    top: '250px',
    left: '200px'
});


var bloq3 = new Bloq({
    bloqData: buzzerSchema
});
$field.append(bloq3);
bloq3.css({
    top: '300px',
    left: '200px'
});


var bloq4 = new Bloq({
    bloqData: oscillatorStartSchema
});
$field.append(bloq4);
bloq4.css({
    top: '350px',
    left: '200px'
});


var bloq5 = new Bloq({
    bloqData: lcdWriteSchema
});
$field.append(bloq5);
bloq5.css({
    top: '400px',
    left: '200px'
});

var bloq6 = new Bloq({
    bloqData: declareSchema
});
$field.append(bloq6);
bloq6.css({
    top: '450px',
    left: '200px'
});


var bloq7 = new Bloq({
    bloqData: selectSchema
});
$field.append(bloq7);
bloq7.css({
    top: '500px',
    left: '200px'
});

var bloq8 = new Bloq({
    bloqData: arrayVariableSchema
});
$field.append(bloq8);
bloq8.css({
    top: '550px',
    left: '200px'
});

var bloq9 = new Bloq({
    bloqData: basicOperationsSchema
});
$field.append(bloq9);
bloq9.css({
    top: '600px',
    left: '200px'
});