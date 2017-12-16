var Task = require("zenaton").Task;

module.exports = Task("SendInvitation", function(done) {
    console.log("Sending Invitation to: " + this.data);
    var that = this;
    setTimeout(function(){
        console.log("Invitation Well sent to " + that.data);

        done();
    }, 2 * 1000 );
});
