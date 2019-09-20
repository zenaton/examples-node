const uniqid = require("uniqid");
const { run, select } = require("./client");

// my id
const id = uniqid();

// dispatch a workflow
run.withId(id).workflow("WaitEventWorkflow");

// then send it an event
setTimeout(function() {
  select
    .workflow("WaitEventWorkflow")
    .whereId(id)
    .send("MyEvent", {});
}, 5000);
