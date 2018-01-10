var { Task } = require("zenaton");

module.exports = Task("SendOrder", function(done) {
  console.log("Sending " + this.item + " to " + this.address);
  done();
});
