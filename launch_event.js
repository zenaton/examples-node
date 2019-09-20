const uniqid = require("uniqid");
const { run, select } = require("./client");

const id = uniqid();
run.withId(id).workflow("EventWorkflow");

setTimeout(function() {
  select
    .workflow("EventWorkflow")
    .whereId(id)
    .send("MyEvent");
}, 1000);
