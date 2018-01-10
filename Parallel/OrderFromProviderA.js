var { Task } = require("zenaton");

module.exports = Task("OrderFromProviderA", function(done) {
  console.log("Order \"" + this + "\" from Provider A");

  setTimeout(function() {
    done();
  }, 500);
});
