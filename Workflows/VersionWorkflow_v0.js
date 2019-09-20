"use strict";
const { workflow } = require("zenaton");

module.exports = workflow("VersionWorkflow_v0", {
  handle: function*() {
    this.run.task("TaskA");
    yield this.run.task("TaskB");
    yield this.wait.event("MyEvent").forever();
  },
  onEvent: function*(_name, _data) {
    console.log("Event received for Version 0");
  }
});
