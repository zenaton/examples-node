var { Task } = require("zenaton");

module.exports = Task("SendWelcomeEmail2", function(done) {
  console.log("Sending welcome email 2 to: " + this);
  setTimeout(function(){
    console.log("- email 2 sent");

    done(null, 2);
  }, 2000 );
});
