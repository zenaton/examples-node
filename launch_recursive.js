require("./client");
const { dispatch } = require("zenaton");

dispatch.workflow("RecursiveWorkflow", 0, 10);
