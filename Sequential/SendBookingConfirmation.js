var Zenaton = require('zenaton-javascript');

var sendBookingConfirmation = new Zenaton.Task({
    name: 'SendBookingConfirmation',
    handle: function(done) {
        console.log('Sending notification to customer ');
        console.log('- Customer ID: ' + this.customer_id);
        console.log('- Request ID: ' + this.id);
        console.log('- Car ID: ' + this.booking_id);
        done();
    }
});

module.exports = sendBookingConfirmation;
