const workflow = require("zenaton").workflow;

module.exports = workflow("EventWorkflow", {
  async handle() {
    this.state = true;
    await this.execute.task("TaskA");
    // Do "TaskB" if "MyEvent" has been received before "TaskA" completion, otherwise "TaskC"  
    if (this.state) {
      await this.execute.task("TaskB");
    } else {
      await this.execute.task("TaskC");
    }
  },
  async onEvent(name, data) {
    if (name === "MyEvent") {
      this.state = false;
    }
  }
});
