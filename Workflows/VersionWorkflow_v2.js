const
  {Workflow} = require("zenaton"),
  TaskA = require("../Tasks/TaskA"),
  TaskB = require("../Tasks/TaskB"),
  TaskC = require("../Tasks/TaskC"),
  TaskD = require("../Tasks/TaskD")
;

module.exports = Workflow("VersionWorkflow_v2", function() {
  [
    new TaskA(),
    new TaskB(),
    new TaskC(),
    new TaskD()
  ].execute();
});
