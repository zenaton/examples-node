require("dotenv").config({path: __dirname + "/../.env"});
var {Task, Client, Workflow} = require("zenaton");

module.exports = Task("SendEventTask", {
  init(id) {
    this.id = id;

    var app_id = process.env.ZENATON_APP_ID;
    var api_token = process.env.ZENATON_API_TOKEN;
    var app_env = process.env.ZENATON_APP_ENV;
    Client.init(app_id, api_token, app_env);
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
