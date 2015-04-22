'use strict';

var bloq = {

    type: 'statementInput',
    connectors: [{
        type: 'connector-top',
        accept: 'connector-bottom'
    }, {
        type: 'connector-bottom',
        accept: 'connector-top'
    }, {
        type: 'connector-bottom',
        accept: 'connector-top'
    }]
};

module.exports = bloq;