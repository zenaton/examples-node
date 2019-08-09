const { Workflow } = require("zenaton");

module.exports = Workflow("ParallelWorkflow", async function() {

  // We start 2 tasks asynchronously
  const taskA = await this.dispatch.task('TaskA');
  const taskB = await this.dispatch.task('TaskB');

  // Then we wait for both completion
  const [a, b] = await this.wait.completion(taskA, taskB).forever();

  // Do something with both results
  if (a > b) {
    await this.dispatch.task('TaskC');
  } else {
    await this.dispatch.task('TaskD');
  }
});
