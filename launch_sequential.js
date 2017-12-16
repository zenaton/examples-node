require('./client');

var CarBookingWorkflow = require('./Sequential/CarBookingWorkflow');

var request = {
    id: '1234567890',
    customer_id: '2DER45G',
};

new CarBookingWorkflow(request).dispatch();
