
var client = require('./client');
var CarBookingWorkflow = require('./Sequential/CarBookingWorkflow');

var request = {
    id: '1234567890',
    customer_id: '2DER45G',
};

var response = client.start(new CarBookingWorkflow(request));
console.log(response);
