var Zenaton = require('zenaton-javascript');
var PrepareOrder = require('./PrepareOrder');
var SendOrder = require('./SendOrder');

module.exports = new Zenaton.Workflow({
    name: 'OrderWorkflow',
    handle: function() {

        execute(new PrepareOrder(this.data.item));

        execute(new SendOrder(this.data));
    },
    onEvent: function(event) {
        if (event.name === 'AddressUpdatedEvent') {
            this.data.address = event.address;
        }
    }
});
