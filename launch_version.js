require("./client");

var ParallelWorkflow = require("./Version/ParallelWorkflow");

new ParallelWorkflow({ item: "shirt" }).dispatch();
