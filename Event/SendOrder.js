var Task = require("zenaton").Task;

module.exports = Task("SendOrder", function(done) {
    console.log("Sending " + this.item + " to " + this.address);
    done();
});
