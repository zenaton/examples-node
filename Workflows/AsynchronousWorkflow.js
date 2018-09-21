const
  {Workflow} = require("zenaton"),
  TaskA = require("../Tasks/TaskA"),
  TaskB = require("../Tasks/TaskB")
;

module.exports = Workflow("AsynchronousWorkflow", function() {
  new TaskB().dispatch();
  new TaskA().execute();
});
