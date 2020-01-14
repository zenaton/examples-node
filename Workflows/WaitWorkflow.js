"use strict";

const { duration } = require("zenaton");

module.exports.handle = function*() {
  yield this.run.task("TaskA");
  yield this.wait.for(duration.seconds(15));
  yield this.run.task("TaskB");
};
