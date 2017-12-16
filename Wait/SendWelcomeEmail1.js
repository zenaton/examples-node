var Zenaton = require('zenaton');
var _ = require('lodash');

module.exports = new Zenaton.Task({
    name: 'SendWelcomeEmail1',
    handle: function(done) {
        console.log('Sending welcome email 1 to: ' + this.data);
        setTimeout(function(){
            console.log('- email 1 sent');
            done();
        }, _.random(1, 3) * 1000 );

    }
});
