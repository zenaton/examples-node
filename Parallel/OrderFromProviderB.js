var Zenaton = require('zenaton-javascript');

module.exports = new Zenaton.Task({
    name: 'OrderFromProviderB',
    handle: function(done) {
        console.log('Order "' + this.data + '" from Provider B');
        done();

    }
});
