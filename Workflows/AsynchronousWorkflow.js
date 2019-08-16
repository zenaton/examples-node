"use strict";
const { workflow } = require("zenaton");

module.exports = workflow("AsynchronousWorkflow", {
  async handle() {
    await this.dispatch.task("TaskA");
    await this.dispatch.task("TaskB");
    await this.execute.task("TaskC");
    await this.execute.task("TaskD");
  }
});
