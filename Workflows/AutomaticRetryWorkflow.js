const { workflow } = require("zenaton");

module.exports = workflow("AutomaticRetryWorkflow",  function*() {
  yield this.run.task("TaskWithRetry");
});
