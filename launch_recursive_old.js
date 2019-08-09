require("./client");
const RecursiveWorkflow = require("./Recursive_old/RecursiveWorkflow");

// if you need to kill an existing workflow, use:
// RecursiveWorkflow.whereId(3).kill().catch(err => {
//     console.error(err);
// });

new RecursiveWorkflow(0, 10).dispatch().catch(err => {
  console.error(err);
});
