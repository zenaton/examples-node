"use strict";
const { workflow } = require("zenaton");

module.exports = workflow("ErrorWorkflow", function*() {
  yield this.run.task(["TaskA"], ["TaskE"]);
  yield this.run.task("TaskC");
});
