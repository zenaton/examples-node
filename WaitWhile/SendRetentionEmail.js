var Zenaton = require('zenaton-javascript');
var _ = require('lodash');

module.exports = new Zenaton.Task({
    name: 'SendRetentionEmail',
    handle: function(done) {
        console.log('Sending retention email to: ' + this.email);
        setTimeout(function(){
            console.log('- email sent');
            done();
        }, _.random(1, 3) * 1000 );

    }
});
