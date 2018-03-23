require("./client");
var WaitEventWorkflow = require("./Workflows/WaitEventWorkflow");

new WaitEventWorkflow().dispatch();

setTimeout(function(){
  WaitEventWorkflow.whereId("MyId").send("MyEvent", {});
}, 2000);
