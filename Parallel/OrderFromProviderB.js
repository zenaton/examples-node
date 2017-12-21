var Task = require("zenaton").Task;

module.exports = Task("OrderFromProviderB", function(done) {
    console.log("Order \"" + this + "\" from Provider B");

    setTimeout(function() {
        done();
    }, 500);
});
