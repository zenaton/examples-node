"use strict";
const { workflow } = require("zenaton");

module.exports = workflow("ErrorWorkflow", async function() {
  await this.dispatch.task("TaskA");
  await this.execute.task("TaskE");
  await this.execute.task("TaskC");
});
