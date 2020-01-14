"use strict";

module.exports.handle = function*() {
  this.run.task("TaskA");
  this.run.task("TaskB");
  yield this.run.task("TaskC");
  yield this.run.task("TaskD");
};
