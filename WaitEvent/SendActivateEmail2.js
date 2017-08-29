var Zenaton = require('zenaton-javascript');
var _ = require('lodash');

module.exports = new Zenaton.Task({
    name: 'SendActivateEmail2',
    handle: function(done) {
        console.log('Sending activate email 2 to: ' + this.data);
        setTimeout(function(){
            console.log('- email 2 sent');
            done();
        }, _.random(1, 3) * 1000 );

    }
});
