const workflow = require("zenaton").workflow;

module.exports = workflow("ErrorWorkflow", async function() {
  await this.dispatch.task('TaskA');
  await this.execute.task('TaskE');
  await this.execute.task('TaskC');
});
