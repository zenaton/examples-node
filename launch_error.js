const { Workflow } = require("zenaton");
require("./client");

new Workflow("ErrorWorkflow").dispatch();

