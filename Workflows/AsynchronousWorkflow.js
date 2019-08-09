const { Workflow} = require("zenaton");

module.exports = Workflow("AsynchronousWorkflow", async function() {
  await this.dispatch.task('TaskA');
  await this.dispatch.task('TaskB');
  await this.execute.task('TaskC');
  await this.execute.task('TaskD');
});
