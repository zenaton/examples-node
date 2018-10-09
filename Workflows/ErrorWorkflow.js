const
  {Workflow} = require("zenaton"),
  TaskA = require("../Tasks/TaskA"),
  TaskC = require("../Tasks/TaskC"),
  TaskE = require("../Tasks/TaskE")
;

module.exports = Workflow("ErrorWorkflow", function() {
  [
    new TaskA(),
    new TaskE()
  ].execute();

  new TaskC().execute();
});
