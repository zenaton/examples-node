var { Task } = require("zenaton");

module.exports = Task("SendActivateEmail1", function(done) {
  console.log("Sending activate email 1 to: " + this);
  console.log("- email 1 sent");
  done();
});
