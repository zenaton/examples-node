const { task } = require("zenaton");
const { dispatch } = require("./client");

module.exports = task("TaskA", async function() {
  console.log("Task A starts");

  await new Promise(resolve => {
    setTimeout(resolve, 3000);
  });

  dispatch.workflow("SequentialWorkflow");

  console.log("Task A ends");
  return 0;
});
