"use strict";
const { workflow } = require("zenaton");

module.exports = workflow("VersionWorkflow_v2", {
  async handle() {
    await this.dispatch.task("TaskA");
    await this.dispatch.task("TaskB");
    await this.dispatch.task("TaskC");
    await this.execute.task("TaskD");
    await this.wait.event("MyEvent").forever();
  },
  async onEvent(name, data) {
    console.log("Event received for Version 2");
  }
});
