var Task = require("zenaton").Task;

module.exports = Task("SendWelcomeEmail1", function(done) {
    console.log("Sending welcome email 1 to: " + this.data);
    setTimeout(function(){
        console.log("- email 1 sent");

        done();
    }, 2000 );
});
