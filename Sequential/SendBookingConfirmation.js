var Zenaton = require('zenaton-javascript');

module.exports = new Zenaton.Task({
    name: 'SendBookingConfirmation',
    handle: function(done) {
        console.log('Sending notification to customer ');
        console.log('- Customer ID: ' + this.data.customer_id);
        console.log('- Request ID: ' + this.data.id);
        console.log('- Car ID: ' + this.data.booking_id);
        done();
    }
});
