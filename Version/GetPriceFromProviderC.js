var { Task } = require("zenaton");

module.exports = Task("Version/GetPriceFromProviderC", {
  construct(item, version) {
    this.item = item;
    this.version = version;
    this.provider = "C";
  },
  handle(done) {
    var provider = this.provider;
    console.log("Contacting provider " + provider + " to get the price... (version " + this.version + ")");
    setTimeout( function() {
      var price = 83;
      console.log("Price from Provider " + provider + " is: " + price);

      done(null, price);
    }, 2500);
  }
});
