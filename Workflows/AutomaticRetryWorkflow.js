"use strict";

module.exports.handle = function*() {
  yield this.run.task("TaskWithRetry");
};
