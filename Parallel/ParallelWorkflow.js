var Workflow = require('zenaton').Workflow;
var GetPriceFromProviderA = require('./GetPriceFromProviderA');
var GetPriceFromProviderB = require('./GetPriceFromProviderB');
var OrderFromProviderA = require('./OrderFromProviderA');
var OrderFromProviderB = require('./OrderFromProviderB');

module.exports = Workflow('ParallelWorkflow', {
    handle: function() {
        var [priceA, priceB] = parallel(
            new GetPriceFromProviderA(),
            new GetPriceFromProviderB()
        ).execute();

        if (priceA < priceB) {
            new OrderFromProviderA(this.data.item).execute();
        } else {
            new OrderFromProviderB(this.data.item).execute();
        }
    }
});
