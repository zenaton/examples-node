var Zenaton = require('zenaton-javascript');

module.exports = new Zenaton.Task({
    name: 'OrderFromProviderA',
    handle: function(done) {
        console.log('Order "' + this.item + '" from Provider A');
        done();

    }
});
