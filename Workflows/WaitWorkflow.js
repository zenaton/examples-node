const { workflow, duration, datetime } = require("zenaton");

module.exports = workflow("WaitWorkflow", async function() {
  await this.execute.task('TaskA');
  await this.wait.for(datetime.monday(1));
  await this.execute.task('TaskB');
});
