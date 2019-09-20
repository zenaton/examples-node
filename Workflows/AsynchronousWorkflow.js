"use strict";
const { workflow } = require("zenaton");

module.exports = workflow("AsynchronousWorkflow", function*() {
  this.run.task("TaskA");
  this.run.task("TaskB");
  yield this.run.task("TaskC");
  yield this.run.task("TaskD");
});
