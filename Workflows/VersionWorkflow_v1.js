const
  {Workflow} = require("zenaton"),
  TaskA = require("../Tasks/TaskA"),
  TaskB = require("../Tasks/TaskB"),
  TaskC = require("../Tasks/TaskC")
;

module.exports = Workflow("VersionWorkflow_v1", function() {
  [
    new TaskA(),
    new TaskB(),
    new TaskC()
  ].execute();
});
