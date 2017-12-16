var Task = require("zenaton").Task;

module.exports = Task("LogActivateUser", function(done) {
    console.log("Ending at stage "+ this.data);

    done();
});
