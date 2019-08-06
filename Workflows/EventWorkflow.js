const { Workflow } = require("zenaton");
const TaskA = require("../Tasks/TaskA");
const TaskB = require("../Tasks/TaskB");
const TaskC = require("../Tasks/TaskC");

module.exports = Workflow("EventWorkflow", {
  async handle() {
    this.state = true;

    await new TaskA().execute();

    if (this.state) {
      await new TaskB().execute();
    } else {
      await new TaskC().execute();
    }
  },
  onEvent(eventName, eventData) {
    if (eventName === "MyEvent") {
      this.state = false;
    }
  }
});
