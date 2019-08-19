const uniqid = require("uniqid");
const { dispatch, select } = require("./client");

const id = uniqid();
dispatch.withId(id).workflow("EventWorkflow");

setTimeout(function() {
  select
    .workflow("EventWorkflow")
    .whereId(id)
    .send("MyEvent");
}, 1000);
