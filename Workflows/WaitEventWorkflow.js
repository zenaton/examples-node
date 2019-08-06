const { Wait, Workflow } = require("zenaton");

module.exports = Workflow("WaitEventWorkflow", {
  async handle() {
    // Wait until the event at most 4 seconds
    const event = await this.wait.event("MyEvent").for(4);

    if (event) {
      // If event has been triggered within 4 seconds
      await this.execute.task('TaskA');
    } else {
      // else
      await this.execute.task('TaskB');
    }
  }
});
