var { Version } = require("zenaton");
var ParallelWorkflow_v0 = require("./ParallelWorkflow_v0");
var ParallelWorkflow_v1 = require("./ParallelWorkflow_v1");
var ParallelWorkflow_v2 = require("./ParallelWorkflow_v2");

module.exports = Version("Version/ParallelWorkflow", [
  ParallelWorkflow_v0,
  ParallelWorkflow_v1,
  ParallelWorkflow_v2
]);
