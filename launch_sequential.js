require("./client");
const util = require('util')

var Car = require("./Sequential/CarBookingWorkflow");

new Car({id: "1234567890", customer_id: "2DER45G"}).dispatch();
