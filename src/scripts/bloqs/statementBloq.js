'use strict';

module.exports = function() {

    return {
        type: 'statement',
        connectors: [{
            type: 'connector-top',
            accept: ['connector-bottom']

        }, {
            type: 'connector-bottom',
            accept: ['connector-top']

        }]
    };

};
