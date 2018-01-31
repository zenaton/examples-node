require("dotenv").config({path: __dirname + "/../.env"});
var {Task, Client, Workflow} = require("zenaton");

module.exports = Task("RelaunchTask", {
  init(id) {
    this.id = id;

    var app_id = process.env.ZENATON_APP_ID;
    var api_token = process.env.ZENATON_API_TOKEN;
    var app_env = process.env.ZENATON_APP_ENV;
    Client.init(app_id, api_token, app_env);
  },
  handle(done) {
    // Get workflow class definition
    var RecursiveWorkflow = Workflow("RecursiveWorkflow");

    // launch new workflow
    new RecursiveWorkflow(1 + this.id).dispatch();

    done();
  }
});
