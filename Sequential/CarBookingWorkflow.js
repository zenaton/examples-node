var Zenaton = require('zenaton-javascript');

var bookCar = require('./BookCar');
var sendBookingConfirmation = require('./SendBookingConfirmation');

module.exports = new Zenaton.Workflow({
    name: 'CarBookingWorkflow',
    handle: function() {

        var booking_id = execute(bookCar({id: this.id}));
        // throw new Error('API request failed');
        execute(sendBookingConfirmation({
            id: this.id,
            customer_id: this.customer_id,
            request_id: this.request_id,
            booking_id: booking_id
        }));
    }
});
