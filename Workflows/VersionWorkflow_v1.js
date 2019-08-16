"use strict";
const { workflow } = require("zenaton");

module.exports = workflow("VersionWorkflow_v1", {
  async handle() {
    await this.dispatch.task("TaskA");
    await this.dispatch.task("TaskB");
    await this.execute.task("TaskC");
    await this.wait("MyEvent").forever();
  },
  async onEvent(name, data) {
    console.log("Event received for Version 1");
  }
});
