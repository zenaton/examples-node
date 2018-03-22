var { Wait, Workflow } = require("zenaton");

var TaskA = require("../Tasks/TaskA");
var TaskB = require("../Tasks/TaskB");

module.exports = Workflow("WaitEventWorkflow", {
  handle() {
    var event;

    // Wait until the event or 4 seconds
    event = new Wait("MyEvent").seconds(4).execute();

    // If event has been triggered
    if (event) {
      // Execute TaskB
      new TaskA().execute();
    } else {
      // Execute Task B
      new TaskB().execute();
    }
  },
  id() {
    return "MyWaitEventWorkflowExample";
  }
});
