const uniqid = require("uniqid");
const { run, select } = require("./client");

const id = uniqid();
// dispatch a workflow
run.withId(id).workflow("VersionWorkflow");

// then send it an event
setTimeout(function() {
  select
    .workflow("VersionWorkflow")
    .whereId(id)
    .send("MyEvent");
}, 5000);
