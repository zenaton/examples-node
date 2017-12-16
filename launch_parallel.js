require("./client");
var ParallelWorkflow = require("./Parallel/ParallelWorkflow");

new ParallelWorkflow({ item: "shirt" }).dispatch();
