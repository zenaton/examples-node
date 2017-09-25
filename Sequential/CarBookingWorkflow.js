var Zenaton = require('zenaton-javascript');

var BookCar = require('./BookCar');
var SendBookingConfirmation = require('./SendBookingConfirmation');

module.exports = new Zenaton.Workflow({
    name: 'CarBookingWorkflow',
    handle: function() {

        this.data.booking_id = execute(new BookCar(this.data.id));
        execute(new SendBookingConfirmation(this.data));
    }
});
