var Zenaton = require('zenaton-javascript');

var _ = require('lodash');

module.exports = new Zenaton.Task({
    name: 'GetPriceFromProviderA',
    handle: function(done) {
        console.log('Contacting provider A to get the price..');

        setTimeout(function(){
            var price = _.random(80, 100);
            console.log('Price from Provider A is: ' + price);
            done(null, price);
        }, _.random(5, 10) * 1000 );

    }
});
