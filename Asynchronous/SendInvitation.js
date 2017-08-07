var Zenaton = require('zenaton-javascript');

var _ = require('lodash');

var orderFromProviderA = new Zenaton.Task({
    name: 'SendInvitation',
    handle: function(done) {
        console.log('Sending Invitation to: ' + this.data);
        var that = this;
        setTimeout(function(){
            console.log('Invitation Well sent to ' + that.data);
            done();
        }, _.random(1,3) * 1000 );

    }
});

module.exports = orderFromProviderA;
