require("./client");
var OrderWorkflow = require("./Event/OrderWorkflow");

var item = "shirt";
var orderId = "3141592";
var address = "1600 Pennsylvania Ave NW, Washington, DC 20500, USA";

// OrderWorkflow.whereId(data.orderId).kill();

new OrderWorkflow(item, orderId, address).dispatch();

// setTimeout(function() {
//   OrderWorkflow.whereId("3141592").send("AddressUpdatedEvent", {address: "One Infinite Loop Cupertino, CA 95014"})
//     .then()
//     .catch(function(error){
//       console.log("error:");
//       console.log(error);
//     });
// }, 2000 );
