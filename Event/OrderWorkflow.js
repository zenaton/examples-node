var Zenaton = require('zenaton-javascript');

var prepareOrder = require('./PrepareOrder');
var sendOrder = require('./SendOrder');

var orderWorkflow = new Zenaton.Workflow({
    name: 'OrderWorkflow',
    handle: function() {

        execute(prepareOrder({item: this.item}));

        if (!this.cancelled) {
            execute(sendOrder({item: this.item, address: this.address}));
        }
    },
    onEvent: function(event) {
        if (event.name === 'AddressUpdatedEvent') {
            this.address = event.address;
        }
    }
});

module.exports = orderWorkflow;
