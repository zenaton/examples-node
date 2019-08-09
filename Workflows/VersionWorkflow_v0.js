const { Workflow } = require("zenaton");

module.exports = Workflow("VersionWorkflow_v0", async function() {
  await this.dispatch.task('TaskA');
  await this.execute.task('TaskB');
});
