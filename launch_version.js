require("./client");

const VersionWorkflow = require("./Workflows/VersionWorkflow");

new VersionWorkflow().dispatch();
