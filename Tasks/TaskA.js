const task = require("zenaton").task;

module.exports = task("TaskA", async function() {
  console.log("Task A starts");

  await new Promise(resolve => {
    setTimeout(resolve, 3000);
  });

  console.log("Task A ends");
  return 0;
});
