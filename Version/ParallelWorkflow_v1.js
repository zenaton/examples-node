var { Workflow } = require("zenaton");
var GetPriceFromProviderA = require("./GetPriceFromProviderA");
var GetPriceFromProviderB = require("./GetPriceFromProviderB");
var GetPriceFromProviderC = require("./GetPriceFromProviderC");
var OrderFromProviderA = require("./OrderFromProviderA");
var OrderFromProviderB = require("./OrderFromProviderB");
var OrderFromProviderC = require("./OrderFromProviderC");

module.exports = Workflow("Version/ParallelWorkflow_v1", function() {
  var prices = [
    new GetPriceFromProviderA(this.item, 1),
    new GetPriceFromProviderB(this.item, 1),
    new GetPriceFromProviderC(this.item, 1)
  ].execute();

  switch (prices.indexOf(Math.min(...prices))) {
  case 0:
    new OrderFromProviderA(this.item, 1).execute();
    break;
  case 1:
    new OrderFromProviderB(this.item, 1).execute();
    break;
  case 2:
    new OrderFromProviderC(this.item, 1).execute();
    break;
  }
});
