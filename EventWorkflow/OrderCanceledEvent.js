var Zenaton = require('zenaton-javascript');

var orderCanceledEvent = new Zenaton.Event({
    name: 'OrderCanceledEvent'
});

module.exports = orderCanceledEvent;
