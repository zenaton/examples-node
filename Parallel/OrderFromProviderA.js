var Zenaton = require('zenaton');

module.exports = new Zenaton.Task({
    name: 'OrderFromProviderA',
    handle: function(done) {
        console.log('Order "' + this.data + '" from Provider A');
        done();

    }
});
