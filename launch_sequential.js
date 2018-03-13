require("./client");

var Car = require("./Sequential/CarBookingWorkflow");

// var c = Car.whereId(0).find();

new Car({id: "1234567890", customer_id: "2DER45G"}).dispatch();
