const { Workflow, Dispatch} = require("zenaton");

module.exports = Workflow("AsynchronousWorkflow", async function() {
  await Dispatch.task('TaskA');
  await Dispatch.task('TaskB');
  await this.execute.task('TaskC');
  await this.execute.task('TaskD');
});
