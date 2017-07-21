var Zenaton = require('zenaton-javascript');
var _ = require('lodash');

module.exports = new Zenaton.Task({
    name: 'SendActivateEmail1',
    handle: function(done) {
        console.log('Sending activate email 1 to: ' + this.email);
        setTimeout(function(){
            console.log('- email 1 sent');
            done();
        }, _.random(1, 3) * 1000 );

    }
});
