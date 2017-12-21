require("./client");
var OrderWorkflow = require("./Event/OrderWorkflow");

var data = {
    item: "shirt",
    orderId:  "3141592",
    address: "1600 Pennsylvania Ave NW, Washington, DC 20500, USA"
};

// OrderWorkflow.whereId(data.orderId).kill();

new OrderWorkflow(data).dispatch();

setTimeout(function(){
    OrderWorkflow.whereId("3141592").send("AddressUpdatedEvent", {address: "One Infinite Loop Cupertino, CA 95014"});
}, 2000 );
