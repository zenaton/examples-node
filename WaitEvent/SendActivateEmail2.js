var Task = require("zenaton").Task;

module.exports = Task("SendActivateEmail2", function(done) {
    console.log("Sending activate email 2 to: " + this.data);
    setTimeout(function(){
        console.log("- email 2 sent");

        done();
    }, 2000 );
});
