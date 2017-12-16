var Zenaton = require('zenaton');
var _ = require('lodash');

module.exports = new Zenaton.Task({
    name: 'SendOrder',
    handle: function(done) {
        console.log('Sending ' + this.data.item + ' to ' + this.data.address);
        done();
    }
});
