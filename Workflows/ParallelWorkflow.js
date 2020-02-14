"use strict";

module.exports.handle = function*() {
  // We start 2 tasks in parallel
  const [a, b] = yield this.run.task(["TaskA"], ["TaskB"]);

  // Then do something with both results
  if (a > b) {
    this.run.task("TaskC");
  } else {
    this.run.task("TaskD");
  }
};
