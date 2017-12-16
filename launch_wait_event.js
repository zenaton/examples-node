require("./client");
var ActivationWorkflow = require("./WaitEvent/ActivationWorkflow");
var UserActivatedEvent = require("./WaitEvent/UserActivatedEvent");

new ActivationWorkflow({ email: "user@yoursite.com" }).dispatch();

var instance = client.find("ActivationWorkflow").byId(data.email);
setTimeout(function(){
    response = instance.sendEvent(new UserActivatedEvent({ action: "User did an important action" }));
    console.log(response);
}, 6 * 1000);
