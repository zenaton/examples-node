var Zenaton = require('zenaton-javascript');

var deliveryAddressUpdatedEvent = new Zenaton.Event({
    name: 'DeliveryAddressUpdatedEvent'
});

module.exports = deliveryAddressUpdatedEvent;
