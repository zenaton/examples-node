require("dotenv").config({path: __dirname + "/../.env"});
var {Task, Workflow} = require("zenaton");

module.exports = Task("SendEventTask", {
  init(id) {
    this.id = id;
  },
  handle(done) {
    console.log("\nIteration: " + this.id);

    // Get workflow class definition
    var RecursiveWorkflow = Workflow("RecursiveWorkflow");

    // send event to current workflow
    RecursiveWorkflow.whereId(this.id).send("EndingEvent", {id: this.id})
      .then( (result) => { done(null, result); })
      .catch( (error) => { done(error, null); });
  }
});
