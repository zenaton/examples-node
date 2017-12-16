require("./client");
var WelcomeWorkflow = require("./Wait/WelcomeWorkflow");

new WelcomeWorkflow({email: "user@yoursite.com"}).dispatch();
