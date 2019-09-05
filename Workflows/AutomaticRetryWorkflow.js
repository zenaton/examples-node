const { Workflow } = require("zenaton");
const TaskWithRetry = require("../Tasks/TaskWithRetry");

module.exports = Workflow("AutomaticRetryWorkflow", async function() {
  await new TaskWithRetry().execute();
});
