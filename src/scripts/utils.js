/*jshint bitwise: false*/
/*global require */
'use strict';

var $ = require('jquery');


var generateUUID = function() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};

var getNumericStyleProperty = function(style, prop) {
    return parseInt(style.getPropertyValue(prop), 10);
};

var getMousePosition = function(element) {
    var x = 0,
        y = 0;
    var inner = true;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        var style = getComputedStyle(element, null);
        var borderTop = getNumericStyleProperty(style, 'border-top-width');
        var borderLeft = getNumericStyleProperty(style, 'border-left-width');
        y += borderTop;
        x += borderLeft;
        if (inner) {
            var paddingTop = getNumericStyleProperty(style, 'padding-top');
            var paddingLeft = getNumericStyleProperty(style, 'padding-left');
            y += paddingTop;
            x += paddingLeft;
        }
        inner = false;
        element = element.offsetParent;
    } while (element);
    return {
        x: x,
        y: y
    };
};

var createBloqElement = function(elementSchema) {
    var $element = null;
    switch (elementSchema.alias) {
        case 'dropdown':
            //component
            $element = $('<select>');
            $element.attr({
                name: '',
            });
            //content
            var $tempElement = null;
            console.log('elementSchema.value.length');
            console.log(elementSchema.value.length);
            for (var i = 0; i < elementSchema.value.length; i++) {
                $tempElement = $('<option>').html(elementSchema.value[i]);
                $element.append($tempElement);
            }
            break;
        case 'text':
            $element = $('<span>').html(elementSchema.value);
            break;
        case 'numberInput':
            $element = $('<input>').attr({
                placeholder: elementSchema.placeholder
            }).html(elementSchema.value);
            break;
        default:
            throw 'elementSchema not defined: ' + elementSchema.alias;
    }

    return $element;
};


var itsOver = function(dragConnector, dropConnector, margin) {
    margin = margin || 0;
    return dragConnector.offset().left < (dropConnector.offset().left + dropConnector.width() + margin) && (dragConnector.offset().left + dragConnector.width()) > (dropConnector.offset().left - margin) && dragConnector.offset().top < (dropConnector.offset().top + dropConnector.height() + margin) && (dragConnector.offset().top + dragConnector.height()) > (dropConnector.offset().top - margin);
};

module.exports.generateUUID = generateUUID;
module.exports.getNumericStyleProperty = getNumericStyleProperty;
module.exports.getMousePosition = getMousePosition;
module.exports.createBloqElement = createBloqElement;
module.exports.itsOver = itsOver;