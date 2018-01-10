var { Task } = require("zenaton");

module.exports = Task("Version/OrderFromProviderA", {
  construct(item, version) {
    this.item = item;
    this.version = version;
    this.provider = "A";
  },
  handle(done) {
    console.log("Order \"" + this.item + "\" from Provider " + this.provider + " (version " + this.version + ")");

    setTimeout(function() {
      done();
    }, 500);
  }
});
