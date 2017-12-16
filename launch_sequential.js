require("./client");
var CarBookingWorkflow = require("./Sequential/CarBookingWorkflow");

new CarBookingWorkflow({id: "1234567890", customer_id: "2DER45G"}).dispatch();
