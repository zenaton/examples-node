const { dispatch, select } = require("zenaton");
const uniqid = require("uniqid");
require("./client");

const id = uniqid();
dispatch.withId(id).workflow("EventWorkflow")

setTimeout(function() {
  select.workflow("EventWorkflow").whereId(id).send("MyEvent");
}, 1000);
