var { Task } = require("zenaton");

module.exports = Task("LogActivateUser", function(done) {
  console.log("Ending at stage " + this);

  done();
});
