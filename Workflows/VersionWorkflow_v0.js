"use strict";

module.exports.handle = function*() {
  this.run.task("TaskA");
  yield this.run.task("TaskB");
  yield this.wait.event("MyEvent").forever();
};

module.exports.onEvent = function*(name) {
  console.log(`Event ${name} received for Version 0`);
};
