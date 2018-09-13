const {Task} = require("zenaton");

module.exports = Task("TaskC", function(done) {
  console.log("Task C starts");
  setTimeout(function() {
    console.log("Task C ends");
    done(null, 2);
  }, 7000);
});
