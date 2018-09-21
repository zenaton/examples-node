const {Task} = require("zenaton");

module.exports = Task("TaskD", function(done) {
  console.log("Task D starts");
  setTimeout(function() {
    console.log("Task D ends");
    done(null, 3);
  }, 9000);
});
