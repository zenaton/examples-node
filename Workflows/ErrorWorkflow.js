"use strict";
const { workflow } = require("zenaton");

module.exports = workflow("ErrorWorkflow", function*() {
  this.run.task("TaskA");
  yield this.run.task("TaskE");
  yield this.run.task("TaskC");
});
