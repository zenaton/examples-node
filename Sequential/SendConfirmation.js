var Task = require("zenaton").Task;

module.exports = Task("SendConfirmation", function(done) {
    console.log("Sending notification to customer ");

    var booking_id = this.booking_id;
    setTimeout(function() {
        console.log("Sent for: " + booking_id);

        done();
    }, 2000);
});
