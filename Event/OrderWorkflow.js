var Zenaton = require('zenaton-javascript');
var PrepareOrder = require('./PrepareOrder');
var SendOrder = require('./SendOrder');

module.exports = new Zenaton.Workflow({
    name: 'OrderWorkflow',
    handle: function() {

        execute(PrepareOrder({item: this.item}));

        execute(SendOrder({item: this.item, address: this.address}));
    },
    onEvent: function(event) {
        if (event.name === 'AddressUpdatedEvent') {
            this.address = event.address;
        }
    }
});
