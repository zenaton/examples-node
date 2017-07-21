var Zenaton = require('zenaton-javascript');

var BookCar = require('./BookCar');
var SendBookingConfirmation = require('./SendBookingConfirmation');

module.exports = new Zenaton.Workflow({
    name: 'CarBookingWorkflow',
    handle: function() {

        var booking_id = execute(BookCar({id: this.id}));
        // throw new Error('API request failed');
        execute(SendBookingConfirmation({
            id: this.id,
            customer_id: this.customer_id,
            request_id: this.request_id,
            booking_id: booking_id
        }));
    }
});
