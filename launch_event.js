require("./client");
var EventWorkflow = require("./Workflows/EventWorkflow");

// if you need to kill an existing workflow, use:
// OrderWorkflow.whereId(orderId).kill();

new EventWorkflow().dispatch();

setTimeout(function() {
  EventWorkflow.whereId("MyEventWorkflowExample").send("MyEvent", {});
}, 2000 );
