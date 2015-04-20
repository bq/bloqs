/*global require */
'use strict';

var $ = require('jquery');
var interact = require('interact.js');

function Bloq(params) {
    this.bloqType = params.bloqType;
    this.$bloq = $('<div>');
    this.connectors = [];

    this.$bloq.addClass('bloq');
    this.$bloq.addClass(params.bloqType);

    interact(this.$bloq.get()[0]).draggable({
        restrict: {
            restriction: '#field'
        },
        onmove: function(event) {
            //console.log('move', target);
            var target = event.target,
                // keep the dragged position in the data-x/data-y attributes
                x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
            // translate the element
            target.style.webkitTransform =
                target.style.transform =
                'translate(' + x + 'px, ' + y + 'px)';

            // update the posiion attributes
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
        },
        onstart: function() {
            console.log('dragstart');
            /*if (!$(e.target.parentElement).is(field)) {
                console.log('mi parent no es field');
                var $bloq = $(e.target);
                var x = $bloq.parent().position().left + $bloq.position().left;
                var y = $bloq.parent().position().top + $bloq.position().top;
                field.append(e.target);
                $bloq.css({
                    webkitTransform: 'translate(' + x + 'px, ' + y + 'px)',
                    transform: 'translate(' + x + 'px, ' + y + 'px)'
                });
                $bloq.attr('data-x', x);
                $bloq.attr('data-y', y);
            }*/
        }
    });

    return this.$bloq;
}

module.exports = Bloq;
