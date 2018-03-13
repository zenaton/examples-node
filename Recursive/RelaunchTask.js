require("dotenv").config({path: __dirname + "/../.env"});
var {Task, Workflow} = require("zenaton");

module.exports = Task("RelaunchTask", {
  init(id, max) {
    this.id = id;
    this.max = max;
  },
  handle(done) {
    if (this.id >= this.max) {
      done();
      return;
    }

    // Get workflow class definition
    var RecursiveWorkflow = Workflow("RecursiveWorkflow");

    // launch new workflow
    let id = 1 + this.id;
    console.log("\nIteration: " + id);

    new RecursiveWorkflow(id, this.max).dispatch()
      .then( result => { done(null, result); })
      .catch( error => { done(error, null); });
  }
});
