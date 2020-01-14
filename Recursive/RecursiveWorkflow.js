"use strict";

module.exports.handle = function*(id, max) {
  let counter = 0;

  while (counter < 10) {
    yield this.run.task("DisplayTask", counter);
    counter++;
  }

  if (id < max) {
    yield this.run.task("RelaunchTask", 1 + id, max);
  }
};
