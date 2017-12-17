var Workflow = require("zenaton").Workflow;
var BookCar = require("./BookCar");
var SendBookingConfirmation = require("./SendBookingConfirmation");

module.exports = Workflow("CarBookingWorkflow", {
    handle: function() {
        this.booking_id = (new BookCar(this.id)).execute();
        (new SendBookingConfirmation(this)).execute();
    }
});
