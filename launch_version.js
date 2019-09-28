const uniqid = require("uniqid");
const { run, select } = require("./client");

const tag = `id:${uniqid()}`;
// dispatch a workflow
run.withTag(tag).workflow("VersionWorkflow");

// then send it an event
setTimeout(function() {
  select
    .workflow("VersionWorkflow")
    .withTag(tag)
    .send("MyEvent");
}, 5000);
