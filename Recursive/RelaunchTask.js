require("dotenv").config({path: __dirname + "/../.env"});
var {Task, Workflow} = require("zenaton");

module.exports = Task("RelaunchTask", {
  init(id) {
    this.id = id;
  },
  handle(done) {
    // Get workflow class definition
    var RecursiveWorkflow = Workflow("RecursiveWorkflow");

    // launch new workflow
    new RecursiveWorkflow(1 + this.id).dispatch()
      .then( result => { done(null, result); })
      .catch( error => { done(error, null); });
  }
});
