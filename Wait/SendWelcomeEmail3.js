var Task = require("zenaton").Task;

module.exports = Task("SendWelcomeEmail3", function(done) {
    console.log("Sending welcome email 3 to: " + this.data);
    setTimeout(function(){
        console.log("- email 3 sent");

        done();
    }, 2000 );
});
