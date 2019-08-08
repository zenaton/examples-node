require("./client");


// if you need to kill an existing workflow, use:
// RecursiveWorkflow.whereId(0).kill().catch(err => {
//   console.error(err);
// });

const RecursiveWorkflow = require("./Recursive/RecursiveWorkflow");

new RecursiveWorkflow(0, 10).dispatch().catch(err => {
  console.error(err);
});

const { Dispatch } = require("zenaton");

Dispatch.workflow("RecursiveWorkflow", 0, 10);
