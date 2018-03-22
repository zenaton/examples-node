require("./client");
var WaitEventWorkflow = require("./Workflows/WaitEventWorkflow");

new WaitEventWorkflow().dispatch();

setTimeout(function(){
  WaitEventWorkflow.whereId("MyWaitEventWorkflowExample").send("MyEvent", {});
}, 2000);
