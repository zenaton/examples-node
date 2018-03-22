var {Task} = require("zenaton");

module.exports = Task("TaskA", function(done) {
  console.log("Task A");
  setTimeout(function() {
    done(null, "Task A");
  }, 3000);
});
