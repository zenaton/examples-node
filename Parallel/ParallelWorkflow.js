var Zenaton = require('zenaton-javascript');

var GetPriceFromProviderA = require('./GetPriceFromProviderA');
var GetPriceFromProviderB = require('./GetPriceFromProviderB');
var OrderFromProviderA = require('./OrderFromProviderA');
var OrderFromProviderB = require('./OrderFromProviderB');

module.exports = new Zenaton.Workflow({
    name: 'ParallelWorkflow',
    handle: function() {

        var [priceA, priceB] = execute(
            new GetPriceFromProviderA(),
            new GetPriceFromProviderB()
        );

        if (priceA < priceB) {
            execute(new OrderFromProviderA(this.data.item));
        } else {
            execute(new OrderFromProviderB(this.data.item));
        }
    }
});
