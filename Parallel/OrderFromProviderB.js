var Task = require("zenaton").Task;

module.exports = new Task("OrderFromProviderB", function(done) {
    console.log("Order \"" + this.data + "\" from Provider B");

    done();
});
