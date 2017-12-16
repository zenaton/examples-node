var Zenaton = require('zenaton');
var _ = require('lodash');

module.exports = new Zenaton.Task({
    name: 'SendActivateEmail1',
    handle: function(done) {
        console.log('Sending activate email 1 to: ' + this.data);
        setTimeout(function(){
            console.log('- email 1 sent');
            done();
        }, 1 * 1000 );

    }
});
