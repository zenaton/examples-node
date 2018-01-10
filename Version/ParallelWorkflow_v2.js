var { Workflow } = require("zenaton");
var GetPriceFromProviderA = require("./GetPriceFromProviderA");
var GetPriceFromProviderB = require("./GetPriceFromProviderB");
var GetPriceFromProviderC = require("./GetPriceFromProviderC");
var GetPriceFromProviderD = require("./GetPriceFromProviderD");
var OrderFromProviderA = require("./OrderFromProviderA");
var OrderFromProviderB = require("./OrderFromProviderB");
var OrderFromProviderC = require("./OrderFromProviderC");
var OrderFromProviderD = require("./OrderFromProviderD");

module.exports = Workflow("Version/ParallelWorkflow_v2", function() {
  var prices = [
    new GetPriceFromProviderA(this.item, 2),
    new GetPriceFromProviderB(this.item, 2),
    new GetPriceFromProviderC(this.item, 2),
    new GetPriceFromProviderD(this.item, 2)
  ].execute();

  switch (prices.indexOf(Math.min(...prices))) {
  case 0:
    new OrderFromProviderA(this.item, 2).execute();
    break;
  case 1:
    new OrderFromProviderB(this.item, 2).execute();
    break;
  case 2:
    new OrderFromProviderC(this.item, 2).execute();
    break;
  case 3:
    new OrderFromProviderD(this.item, 2).execute();
    break;
  }
});
