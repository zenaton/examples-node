"use strict";
const { workflow } = require("zenaton");

module.exports = workflow("ParallelWorkflow", async function() {
  // We start 2 tasks synchronously
  const [a, b] = await this.execute.task(["TaskA", 1], ["TaskB", 2]);

  // Then do something with both results
  if (a > b) {
    await this.dispatch.task("TaskC", 3);
  } else {
    await this.dispatch.task("TaskD", 4);
  }
});
