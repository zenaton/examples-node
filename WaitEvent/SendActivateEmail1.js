var Task = require("zenaton").Task;

module.exports = Task("SendActivateEmail1", function(done) {
    console.log("Sending activate email 1 to: " + this.data);
    setTimeout(function(){
        console.log("- email 1 sent");

        done();
    }, 2000 );
});
