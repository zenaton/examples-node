var Task = require("zenaton").Task;

module.exports = new Task("OrderFromProviderA", function(done) {
    console.log("Order \"" + this.data + "\" from Provider A");

    done();
});
