require("./client");
var ActivationWorkflow = require("./WaitEvent/ActivationWorkflow");

// if you need to kill an existing workflow, use:
// ActivationWorkflow.whereId("user@yoursite.com").kill();

new ActivationWorkflow({ email: "user@yoursite.com" }).dispatch();

setTimeout(function(){
  ActivationWorkflow.whereId("user@yoursite.com").send("UserActivatedEvent", {action: "User did an important action" });
}, 7000);
