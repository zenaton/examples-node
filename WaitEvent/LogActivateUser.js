var Zenaton = require('zenaton');
var _ = require('lodash');

module.exports = new Zenaton.Task({
    name: 'LogActivateUser',
    handle: function(done) {

        console.log('Ending at stage '+ this.data);
        done();
    }
});
