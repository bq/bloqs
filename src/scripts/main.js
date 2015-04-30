'use strict';

var $ = require('jquery');
var Bloq = require('./bloq');


// var oscillatorSchema = require('./bloqs/components/oscillator');
// var numberSchema = require('./bloqs/mathematics/number');
// var ledSchema = require('./bloqs/components/led');
// var servoSchema = require('./bloqs/components/servo');
// var lcdWriteSchema = require('./bloqs/components/lcdWrite');
// var declareSchema = require('./bloqs/variables/declare');
// var selectSchema = require('./bloqs/variables/select');
// var arrayVariableSchema = require('./bloqs/variables/arrayVariable');
// var basicOperationsSchema = require('./bloqs/mathematics/basicOperations');
// var ifSchema = require('./bloqs/control/if');
// var buzzerSchema = require('./bloqs/components/buzzer');
// var oscillatorStartSchema = require('./bloqs/components/oscillatorStart');
// console.log(basicOperationsSchema);

var $field = $('#field');
var createBloq = function(bloqType, posX, posY){
	var bloq1 = new Bloq({
	bloqData: bloqType
	});
	$field.append(bloq1.$bloq);
	bloq1.$bloq.css({
	top: posX,
	left: posY
	});
	return bloq1;
};
//Irene's trials with getCode()
createBloq(require('./bloqs/mathematics/number'), '100px','1000px');
// createBloq(numberSchema, '200px','1000px');
var bloq=createBloq(require('./bloqs/components/servo'), '150px','200px');

$field.on('dragend', function() {
	console.log('bloq', bloq.getCode());
});

//Tom's trials
// // var bloq1 = 
// createBloq(ledSchema, '200px','200px');
// // var bloq2 = 
// createBloq(servoSchema, '250px','200px');
// // var bloq3 = 
// createBloq(servoSchema, '300px','200px');
// // var bloq4 = 
// createBloq(servoSchema, '350px','200px');
// // var bloq5 = 
// createBloq(lcdWriteSchema,'400px','200px');
// // var bloq6 = 
// createBloq(declareSchema, '450px','200px');
// // var bloq7 = 
// createBloq(selectSchema, '500px','200px');
// // var bloq8 = 
// createBloq(arrayVariableSchema, '550px','200px');
// // var bloq9 = 
// createBloq(basicOperationsSchema, '600px','200px');
// // var bloq10 = 
// createBloq(numberSchema, '600px','200px');
// // var bloq10 = 
// createBloq(ifSchema, '250px','900px');
