var Zenaton = require('zenaton-javascript');
var _ = require('lodash');

module.exports = new Zenaton.Task({
    name: 'SendWelcomeEmail2',
    handle: function(done) {
        console.log('Sending welcome email 2 to: ' + this.email);
        setTimeout(function(){
            console.log('- email 2 sent');
            done();
        }, _.random(1, 3) * 1000 );

    }
});
