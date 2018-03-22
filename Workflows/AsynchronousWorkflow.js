var {Workflow} = require("zenaton");

var TaskA = require("../Tasks/TaskA");
var TaskB = require("../Tasks/TaskB");

module.exports = Workflow("AsynchronousWorkflow", function() {
  new TaskA().dispatch();

  new TaskB().execute();

});
