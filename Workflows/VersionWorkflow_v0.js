var {Workflow} = require("zenaton");

var TaskA = require("../Tasks/TaskA");
var TaskB = require("../Tasks/TaskB");

module.exports = Workflow("VersionWorkflow_v0", function() {

  [
    new TaskA(),
    new TaskB()
  ].execute();

});
