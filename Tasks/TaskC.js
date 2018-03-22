var {Task} = require("zenaton");

module.exports = Task("TaskC", function(done) {
  console.log("Task C");
  setTimeout(function() {
    done(null, "Task C");
  }, 7000);
});
