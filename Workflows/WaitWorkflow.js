"use strict";
const { workflow, duration } = require("zenaton");

module.exports = workflow("WaitWorkflow", function*() {
  yield this.run.task("TaskA");
  yield this.wait.for(duration.seconds(15));
  yield this.run.task("TaskB");
});
