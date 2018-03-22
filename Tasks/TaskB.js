var {Task} = require("zenaton");

module.exports = Task("TaskB", function(done) {
  console.log("Task B");
  setTimeout(function() {
    done(null, "Task B");
  }, 5000);
});
