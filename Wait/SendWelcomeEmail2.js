var Zenaton = require('zenaton');
var _ = require('lodash');

module.exports = new Zenaton.Task({
    name: 'SendWelcomeEmail2',
    handle: function(done) {
        console.log('Sending welcome email 2 to: ' + this.data);
        setTimeout(function(){
            console.log('- email 2 sent');
            done();
        }, _.random(1, 3) * 1000 );

    }
});
