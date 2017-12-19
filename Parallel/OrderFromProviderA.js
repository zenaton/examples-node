var Task = require("zenaton").Task;

module.exports = Task("OrderFromProviderA", function(done) {
    console.log("Order \"" + this.data + "\" from Provider A");

    setTimeout(function(){
        done();
    }, 500);
});
