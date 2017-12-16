var Task = require("zenaton").Task;

module.exports = Task("SendOrder", function(done) {
    console.log("Sending " + this.data.item + " to " + this.data.address);
    done();
});
