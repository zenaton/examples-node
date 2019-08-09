require("./client");
const { Dispatch } = require("zenaton");

Dispatch.workflow("RecursiveWorkflow", 0, 10);
