require("./client");

const AutomaticRetryWorkflow = require("./Workflows/AutomaticRetryWorkflow");

new AutomaticRetryWorkflow().dispatch().catch(err => {
  console.error(err);
});
