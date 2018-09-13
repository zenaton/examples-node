const
  {Workflow} = require("zenaton"),
  TaskA = require("../Tasks/TaskA"),
  TaskB = require("../Tasks/TaskB")
;

module.exports = Workflow("VersionWorkflow_v0", function() {
  [
    new TaskA(),
    new TaskB()
  ].execute();
});
