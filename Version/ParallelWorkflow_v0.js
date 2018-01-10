var { Workflow } = require("zenaton");
var GetPriceFromProviderA = require("./GetPriceFromProviderA");
var GetPriceFromProviderB = require("./GetPriceFromProviderB");
var OrderFromProviderA = require("./OrderFromProviderA");
var OrderFromProviderB = require("./OrderFromProviderB");

module.exports = Workflow("Version/ParallelWorkflow_v0", function() {
  var prices = [
    new GetPriceFromProviderA(this.item, 0),
    new GetPriceFromProviderB(this.item, 0)
  ].execute();

  switch (prices.indexOf(Math.min(...prices))) {
  case 0:
    new OrderFromProviderA(this.item, 0).execute();
    break;
  case 1:
    new OrderFromProviderB(this.item, 0).execute();
    break;
  }
});
