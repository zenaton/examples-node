const workflow = require("zenaton").workflow;

module.exports = workflow("WaitEventWorkflow", {
  async handle() {
    // Waiting for an "MyEvent" event, at most 4 seconds
    const event = await this.wait.event("MyEvent").for(30);
    // Do "TaskA" if "MyEvent" has been received within 4s, otherwise "TaskB"  
    if (event) {
      await this.execute.task("TaskA");
    } else {
      await this.execute.task("TaskB");
    }
  }
});
