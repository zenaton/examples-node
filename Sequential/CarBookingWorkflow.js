var Workflow = require("zenaton").Workflow;
var BookCar = require("./BookCar");
var SendConfirmation = require("./SendConfirmation");

module.exports = Workflow(
    "CarBookingWorkflow",
    function() {
        this.booking_id = new BookCar(this.id).execute();
        new SendConfirmation(this).execute();
    }
);
