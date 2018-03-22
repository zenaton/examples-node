var { Workflow } = require("zenaton");

var TaskA = require("../Tasks/TaskA");
var TaskB = require("../Tasks/TaskB");
var TaskC = require("../Tasks/TaskC");


module.exports = Workflow("EventWorkflow", {

  handle() {
    new TaskA().execute();

    new TaskB().execute();
  },
  onEvent(eventName, eventData) {
    console.log("Event received: " + eventName);
    if (eventName === "MyEvent") {
      new TaskC().dispatch();
    }
  },
  id() {
    return "MyEventWorkflowExample";
  }
});
