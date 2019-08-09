const { Workflow } = require("zenaton");

module.exports = Workflow("ErrorWorkflow", async function() {
  await this.execute.task('TaskA');
  await this.execute.task('TaskE');
  await this.execute.task('TaskC');
});
