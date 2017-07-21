var Zenaton = require('zenaton-javascript');

var GetPriceFromProviderA = require('./GetPriceFromProviderA');
var GetPriceFromProviderB = require('./GetPriceFromProviderB');
var OrderFromProviderA = require('./OrderFromProviderA');
var OrderFromProviderB = require('./OrderFromProviderB');

module.exports = new Zenaton.Workflow({
    name: 'ParallelWorkflow',
    handle: function() {
        var [priceA, priceB] = execute(
            GetPriceFromProviderA(),
            GetPriceFromProviderB()
        );

        if (priceA < priceB) {
            execute(OrderFromProviderA({item: this.item}));
        } else {
            execute(OrderFromProviderB({item: this.item}));
        }
    }
});
