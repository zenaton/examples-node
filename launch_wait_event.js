const uniqid = require("uniqid");
const { run, select } = require("./client");

// my id
const tag = `id:${uniqid()}`;

// dispatch a workflow
run.withTag(tag).workflow("WaitEventWorkflow");

// then send it an event
setTimeout(function() {
  select
    .workflow("WaitEventWorkflow")
    .whereTag(tag)
    .send("MyEvent", {});
}, 5000);
