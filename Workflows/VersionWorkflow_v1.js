var {Workflow} = require("zenaton");

var TaskA = require("../Tasks/TaskA");
var TaskB = require("../Tasks/TaskB");
var TaskC = require("../Tasks/TaskC");

module.exports = Workflow("VersionWorkflow_v1", function() {

  [
    new TaskA(),
    new TaskB(),
    new TaskC()
  ].execute();

});
