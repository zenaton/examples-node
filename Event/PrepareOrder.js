var Task = require("zenaton").Task;
var _ = require("lodash");

module.exports = Task("PrepareOrder", function(done) {
    console.log("Preparing order for item: " + this.data);
    setTimeout(function(){
        console.log("Order prepared");
        
        done();
    }, _.random(5,10) * 1000 );

});
