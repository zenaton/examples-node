require("./client");

const SequentialWorkflow = require("./Workflows/SequentialWorkflow");

new SequentialWorkflow().dispatch();
