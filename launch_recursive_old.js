require("./client");
const RecursiveWorkflow = require("./Recursive_old/RecursiveWorkflow");

new RecursiveWorkflow(0, 10).dispatch().catch(err => {
  console.error(err);
});
