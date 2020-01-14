"use strict";

module.exports.handle = function*() {
  // We start 2 tasks synchronously
  const [a, b] = yield this.run.task(["TaskA", 1], ["TaskB", 2]);

  // Then do something with both results
  if (a > b) {
    this.run.task("TaskC", 3);
  } else {
    this.run.task("TaskD", 4);
  }
};
