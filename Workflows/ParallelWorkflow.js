const
  {Workflow} = require("zenaton"),
  TaskA = require("../Tasks/TaskA"),
  TaskB = require("../Tasks/TaskB"),
  TaskC = require("../Tasks/TaskC"),
  TaskD = require("../Tasks/TaskD")
;

module.exports = Workflow("ParallelWorkflow", function() {
  const [a, b] = [
    new TaskA(),
    new TaskB()
  ].execute();

  if (a > b) {
    new TaskC().execute();
  } else {
    new TaskD().execute();
  }
});
