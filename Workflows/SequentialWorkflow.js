const
  { Workflow } = require("zenaton"),
  TaskA = require("../Tasks/TaskA"),
  TaskB = require("../Tasks/TaskB"),
  TaskC = require("../Tasks/TaskC")
;

module.exports = Workflow("SequentialWorkflow", function() {
  const a = new TaskA().execute();

  if (a === 0) {
    new TaskB().execute();
  } else {
    new TaskC().execute();
  }
});
