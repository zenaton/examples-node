var Task = require("zenaton").Task;

module.exports = Task("GetPriceFromProviderA", function(done) {
    console.log("Contacting provider A to get the price...");
    setTimeout(function(){
        var price = 84;
        console.log("Price from Provider A is: " + price);

        done(null, price);
    }, 1500 );
});
