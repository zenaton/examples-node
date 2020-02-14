"use strict";

module.exports = {
  *handle() {
    this.state = true;
    yield this.run.task("TaskA");
    // if "MyEvent" has been received during "TaskA" processing
    // do "TaskB", otherwise do "TaskC"
    if (this.state) {
      yield this.run.task("TaskB");
    } else {
      yield this.run.task("TaskC");
    }
  },
  *onEvent(name, data) {
    if (name === "MyEvent") {
      this.state = false;
    }
  }
};
