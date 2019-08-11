const task = require("zenaton").task;

module.exports = task("TaskE", async function() {
  console.log("Task E starts");

  throw new Error("Error in TaskE");

  console.log("Task E ends");
});
