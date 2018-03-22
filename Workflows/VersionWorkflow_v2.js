var {Workflow} = require("zenaton");

var TaskA = require("../Tasks/TaskA");
var TaskB = require("../Tasks/TaskB");
var TaskC = require("../Tasks/TaskC");
var TaskD = require("../Tasks/TaskD");

module.exports = Workflow("VersionWorkflow_v2", function() {

  [
    new TaskA(),
    new TaskB(),
    new TaskC(),
    new TaskD()
  ].execute();

});
