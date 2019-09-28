const task = require("zenaton").task;

module.exports = task("TaskB", async function() {
  console.log("Task B starts");

  await new Promise(resolve => {
    setTimeout(resolve, 5000);
  });

  console.log("Task B ends");
  return 1;
});
