var Task = require("zenaton").Task;

module.exports = Task("SendBookingConfirmation", function(done) {
    console.log("Sending notification to customer ");
    setTimeout(function() {
        console.log("Sent for: " + this.booking_id);

        done();
    }, 2000);
});
