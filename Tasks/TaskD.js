var {Task} = require("zenaton");

module.exports = Task("TaskD", function(done) {
  console.log("Task D");
  setTimeout(function() {
    done(null, "Task D");
  }, 9000);
});
