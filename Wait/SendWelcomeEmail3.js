var { Task } = require("zenaton");

module.exports = Task("SendWelcomeEmail3", function(done) {
  console.log("Sending welcome email 3 to: " + this);
  setTimeout(function(){
    console.log("- email 3 sent");

    done();
  }, 2000 );
});
