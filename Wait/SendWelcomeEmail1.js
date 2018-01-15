var { Task } = require("zenaton");

module.exports = Task("SendWelcomeEmail1", function(done) {
  console.log("Sending welcome email 1 to: " + this);
  setTimeout(function(){
    console.log("- email 1 sent");

    done(null, 1);
  }, 2000 );
});
