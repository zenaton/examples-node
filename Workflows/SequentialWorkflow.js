"use strict";
const { workflow } = require("zenaton");

module.exports = workflow("SequentialWorkflow", function*() {
  const a = yield this.run.task("TaskA");

  if (0 < a) {
    yield this.run.task("TaskB");
  } else {
    yield this.run.task("TaskC");
  }
  yield this.run.task("TaskD");
});
