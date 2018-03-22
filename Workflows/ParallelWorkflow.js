var {Workflow} = require("zenaton");

var TaskA = require("../Tasks/TaskA");
var TaskB = require("../Tasks/TaskB");
var TaskC = require("../Tasks/TaskC");

module.exports = Workflow("ParallelWorkflow", function() {
  var [resultA, resultB] = [
    new TaskA(),
    new TaskB()
  ].execute();

  new TaskC().execute();


});
