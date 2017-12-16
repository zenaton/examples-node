var Zenaton = require('zenaton');

module.exports = Zenaton.Task('SendBookingConfirmation', function(done) {
    console.log('Sending notification to customer ');
    setTimeout(function() {
        console.log('Sent for: ' + this.data.booking_id);
        done();
    }, 2000);
});
