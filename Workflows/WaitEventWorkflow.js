const
  { Wait, Workflow } = require("zenaton"),
  TaskA = require("../Tasks/TaskA"),
  TaskB = require("../Tasks/TaskB")
;

module.exports = Workflow("WaitEventWorkflow", {
  init(id) {
    this.id = id;
  },
  handle() {
    // Wait until the event at most 4 seconds
    const event = new Wait("MyEvent").seconds(4).execute();

    if (event) {
      // If event has been triggered within 4 seconds
      new TaskA().execute();
    } else {
      // else
      new TaskB().execute();
    }
  },
  id() {
    return this.id;
  }
});
