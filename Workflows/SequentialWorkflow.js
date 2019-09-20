"use strict";
const { workflow } = require("zenaton");

module.exports = workflow("SequentialWorkflow", function*() {
  this.a = yield this.run.task("TaskA");
  // Then do something according to first result
  if (0 < this.a) {
    yield this.run.task("TaskB");
  } else {
    yield this.run.task("TaskC");
  }
  yield this.run.task("TaskD");
});
