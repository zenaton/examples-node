var Task = require("zenaton").Task;

module.exports = Task("SendInvitation", function(done) {
    console.log("Sending Invitation to: " + this);
    var that = this;
    setTimeout(function(){
        console.log("Invitation Well sent to " + that);

        done();
    }, 2000 );
});
