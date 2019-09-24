const uniqid = require("uniqid");
const { run, select } = require("./client");

const tag = `id:${uniqid()}`;

run.withTag(tag).workflow("EventWorkflow");

setTimeout(function() {
  select
    .workflow("EventWorkflow")
    .withTag(tag)
    .send("MyEvent");
}, 1000);
