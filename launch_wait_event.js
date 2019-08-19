const uniqid = require("uniqid");
const { dispatch, select } = require("./client");

// my id
const id = uniqid();

// dispatch a workflow
dispatch.withId(id).workflow("WaitEventWorkflow");

// then send it an event
setTimeout(function() {
  select
    .workflow("WaitEventWorkflow")
    .whereId(id)
    .send("MyEvent", {});
}, 5000);
