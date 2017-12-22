var Task = require("zenaton").Task;

module.exports = Task("PrepareOrder", function(done) {
    console.log("Preparing order for item: " + this);
    setTimeout(function(){
        console.log("Order prepared");

        done();
    },  7000 );
});
