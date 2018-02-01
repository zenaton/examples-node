require("./client");
var RecursiveWorkflow = require("./Recursive/RecursiveWorkflow");

// if you need to kill an existing workflow, use:
// RecursiveWorkflow.whereId(0).kill();

new RecursiveWorkflow(0).dispatch();
