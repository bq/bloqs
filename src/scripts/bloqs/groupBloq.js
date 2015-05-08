'use strict';

var bloq = {

    name: 'group',
    type: 'group',
    connectors: [{
        type: 'connector--empty'
    }, {
        type: 'connector--empty'
    }, {
        type: 'connector--root',
        accept: 'connector--top'
    }]
};

module.exports = bloq;