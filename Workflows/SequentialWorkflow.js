"use strict";
const { workflow } = require("zenaton");

module.exports = workflow("SequentialWorkflow", {
  async handle() {
    this.a = await this.execute.task("TaskA");
    // Then do something according to first result
    if (0 < this.a) {
      await this.execute.task("TaskB");
    } else {
      await this.execute.task("TaskC");
    }
    await this.execute.task("TaskD");
  }
});
