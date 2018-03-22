var { Workflow } = require("zenaton");

var TaskA = require("../Tasks/TaskA");
var TaskB = require("../Tasks/TaskB");

module.exports = Workflow("SequentialWorkflow", function() {
  new TaskA().execute();

  new TaskB().execute();
});
