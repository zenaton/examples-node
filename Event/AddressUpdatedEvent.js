var Zenaton = require('zenaton-javascript');

var addressUpdatedEvent = new Zenaton.Event({
    name: 'AddressUpdatedEvent'
});

module.exports = addressUpdatedEvent;
