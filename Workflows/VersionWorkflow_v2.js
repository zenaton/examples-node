const { Workflow } = require("zenaton");

module.exports = Workflow("VersionWorkflow_v0", async function() {
  await this.dispatch.task('TaskA');
  await this.dispatch.task('TaskB');
  await this.dispatch.task('TaskC');
  await this.execute.task('TaskD');
});
