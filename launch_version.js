const uniqid = require("uniqid");
const { dispatch, select } = require("zenaton");
require("./client");

const id = uniqid();
// dispatch a workflow
dispatch.withId(id).workflow("VersionWorkflow");

// then send it an event
setTimeout(function() {
  select
    .workflow("VersionWorkflow")
    .whereId(id)
    .send("MyEvent");
}, 5000);
