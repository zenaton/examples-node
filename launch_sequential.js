require("./client");

var SequentialWorkflow = require("./Workflows/SequentialWorkflow");

new SequentialWorkflow({}).dispatch();
