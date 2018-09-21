const {Task} = require("zenaton");

module.exports = Task("TaskB", function(done) {
  console.log("Task B starts");
  setTimeout(function() {
    console.log("Task B ends");
    done(null, 1);
  }, 5000);
});
