"use strict";
const { workflow } = require("zenaton");

module.exports = workflow("VersionWorkflow_v2", {
  *handle() {
    this.run.task("TaskA");
    this.run.task("TaskB");
    this.run.task("TaskC");
    yield this.run.task("TaskD");
    yield this.wait.event("MyEvent").forever();
  },
  *onEvent(_name, _data) {
    console.log("Event received for Version 2");
  }
});
