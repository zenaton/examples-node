var Zenaton = require('zenaton-javascript');
var _ = require('lodash');

module.exports = new Zenaton.Task({
    name: 'SendOrder',
    handle: function(done) {
        console.log('Sending ' + this.data.item + ' to ' + this.data.address);
        done();
    }
});
