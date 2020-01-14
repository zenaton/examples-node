"use strict";

module.exports.handle = function*() {
  // Waiting for an "MyEvent" event, at most 4 seconds
  const event = yield this.wait.event("MyEvent").for(30);
  // Do "TaskA" if "MyEvent" has been received within 30s, otherwise "TaskB"
  if (event) {
    yield this.run.task("TaskA");
  } else {
    yield this.run.task("TaskB");
  }
};
