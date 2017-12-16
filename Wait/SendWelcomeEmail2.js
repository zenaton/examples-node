var Task = require("zenaton").Task;

module.exports = Task("SendWelcomeEmail2", function(done) {
    console.log("Sending welcome email 2 to: " + this.data);
    setTimeout(function(){
        console.log("- email 2 sent");

        done();
    }, 2000 );
});
