require("./client");
var ActivationWorkflow = require("./WaitEvent/ActivationWorkflow");

new ActivationWorkflow({ email: "user@yoursite.com" }).dispatch();


setTimeout(function(){
  ActivationWorkflow.whereId("user@yoursite.com").find().then((data) => { console.log(data); });
  ActivationWorkflow.whereId("user@yoursite.com").send("UserActivatedEvent", {action: "User did an important action" });
}, 4000);
