require("./client");
var OrderWorkflow = require("./Event/OrderWorkflow");

var item = "shirt";
var orderId = "3141592";
var address = "1600 Pennsylvania Ave NW, Washington, DC 20500, USA";

// if you need to kill an existing workflow, use:
// OrderWorkflow.whereId(orderId).kill();

new OrderWorkflow(item, orderId, address).dispatch();

setTimeout(function() {
  OrderWorkflow.whereId("3141592").send("AddressUpdatedEvent", {address: "One Infinite Loop Cupertino, CA 95014"});
}, 2000 );
