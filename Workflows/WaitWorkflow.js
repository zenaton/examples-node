"use strict";
const { workflow, duration } = require("zenaton");

module.exports = workflow("WaitWorkflow", async function() {
  await this.execute.task("TaskA");
  await this.wait.for(duration.minutes(1));
  await this.execute.task("TaskB");
});
