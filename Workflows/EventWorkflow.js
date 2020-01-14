"use strict";

module.exports.handle = function*() {
  this.state = true;
  yield this.run.task("TaskA");
  // Do "TaskB" if "MyEvent" has been received before "TaskA" completion, otherwise "TaskC"
  if (this.state) {
    yield this.run.task("TaskB");
  } else {
    yield this.run.task("TaskC");
  }
};

module.exports.onEvent = function*(name, data) {
  if (name === "MyEvent") {
    this.state = false;
  }
};
