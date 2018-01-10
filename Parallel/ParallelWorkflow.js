var { Workflow } = require("zenaton");
var GetPriceFromProviderA = require("./GetPriceFromProviderA");
var GetPriceFromProviderB = require("./GetPriceFromProviderB");
var OrderFromProviderA = require("./OrderFromProviderA");
var OrderFromProviderB = require("./OrderFromProviderB");

module.exports = Workflow("ParallelWorkflow", function() {
  var [priceA, priceB] = [
    new GetPriceFromProviderA(this.item),
    new GetPriceFromProviderB(this.item)
  ].execute();

  if (priceA < priceB) {
    new OrderFromProviderA(this.item).execute();
  } else {
    new OrderFromProviderB(this.item).execute();
  }
});
