var Task = require("zenaton").Task;

module.exports = Task("GetPriceFromProviderB", function(done) {
    console.log("Contacting provider B to get the price...");
    setTimeout(function(){
        var price = 97;
        console.log("Price from Provider B is: " + price);

        done(null, price);
    }, 1000 );
});
