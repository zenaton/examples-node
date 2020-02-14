"use strict";

const { duration } = require("zenaton");

module.exports.handle = function*() {
  // Waiting for an "MyEvent" event, at most 30 seconds
  const event = yield this.wait.event("MyEvent").for(duration.seconds(30));
  // Do "TaskA" if "MyEvent" has been received within 30s, otherwise "TaskB"
  if (event) {
    yield this.run.task("TaskA");
  } else {
    yield this.run.task("TaskB");
  }
};
