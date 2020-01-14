"use strict";

module.exports.handle = function*() {
  yield this.run.task(["TaskA"], ["TaskE"]);
  yield this.run.task("TaskC");
};
