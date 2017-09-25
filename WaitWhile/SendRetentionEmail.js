var Zenaton = require('zenaton-javascript');
var _ = require('lodash');

module.exports = new Zenaton.Task({
    name: 'SendRetentionEmail',
    handle: function(done) {
        console.log('Sending retention email to: ' + this.data);
        setTimeout(function(){
            console.log('- email sent');
            done();
        }, 1 * 1000 );

    }
});
