var { Task } = require("zenaton");

module.exports = Task("GetPriceFromProviderB", {
  init(item) {
    this.item = item;
  },
  handle(done) {
    var provider = this.provider();
    console.log("Contacting provider " + provider + " to get the price...");
    setTimeout( function() {
      var price = 82;
      console.log("Price from Provider " + provider + " is: " + price);

      done(null, price);
    }, 2500);
  },
  provider() {
    return "B";
  }
});
