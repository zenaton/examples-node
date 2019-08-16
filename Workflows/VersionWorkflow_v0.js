"use strict";
const { workflow } = require("zenaton");

module.exports = workflow("VersionWorkflow_v0", {
  async handle() {
    await this.dispatch.task("TaskA");
    await this.execute.task("TaskB");
    await this.wait.event("MyEvent").forever();
  },
  async onEvent(name, data) {
    console.log("Event received for Version 0");
  }
});
