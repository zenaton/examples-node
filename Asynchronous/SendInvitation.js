var Zenaton = require('zenaton');

var orderFromProviderA = new Zenaton.Task({
    name: 'SendInvitation',
    handle: function(done) {
        console.log('Sending Invitation to: ' + this.data);
        var that = this;
        setTimeout(function(){
            console.log('Invitation Well sent to ' + that.data);
            done();
        }, 2 * 1000 );

    }
});

module.exports = orderFromProviderA;
