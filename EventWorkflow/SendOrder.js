var Zenaton = require('zenaton-javascript');

var _ = require('lodash');

var sendOrder = new Zenaton.Task({
    name: 'SendOrder',
    handle: function(done) {
        console.log('Sending ' + this.item + ' to ' + this.address);
        done();
    }
});

module.exports = sendOrder;
