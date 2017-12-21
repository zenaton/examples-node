var Task = require("zenaton").Task;

module.exports = Task("BookCar", function(done) {
    console.log("Reserving car for trip Id: " + this);
    setTimeout(function() {
        var car_id = "1547826842785";
        console.log("Reservation number: " + car_id);

        done(null, car_id);
    }, 2000);
});
