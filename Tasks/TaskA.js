const {Task} = require("zenaton");

module.exports = Task("TaskA", function(done) {
  console.log("Task A starts");
  setTimeout(function() {
    console.log("Task A ends");
    done(null, 0);
  }, 3000);
});
