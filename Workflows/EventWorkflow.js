"use strict";
const { workflow } = require("zenaton");

module.exports = workflow("EventWorkflow", {
  *handle() {
    this.state = true;
    yield this.run.task("TaskA");
    // Do "TaskB" if "MyEvent" has been received before "TaskA" completion, otherwise "TaskC"
    if (this.state) {
      yield this.run.task("TaskB");
    } else {
      yield this.run.task("TaskC");
    }
  },
  *onEvent(name, data) {
    if (name === "MyEvent") {
      this.state = false;
    }
  }
});
