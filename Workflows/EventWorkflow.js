const { Workflow } = require("zenaton");

module.exports = Workflow("EventWorkflow", {
  async handle() {
    this.state = true;

    await this.execute.task('TaskA');

    if (this.state) {
      await this.execute.task('TaskB');
    } else {
      await this.execute.task('TaskC');
    }
  },
  async onEvent(eventName, eventData) {
    if (eventName === "MyEvent") {
      this.state = false;
    }
  }
});
