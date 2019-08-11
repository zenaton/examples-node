const task = require("zenaton").task;

module.exports = task("TaskD", async function() {
  console.log("Task D starts");

  await new Promise(resolve => {
    setTimeout(resolve, 9000);
  });

  console.log("Task D ends");
  return 3;
});
