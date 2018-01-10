var { Task } = require("zenaton");

module.exports = Task("SendActivateEmail2", function(done) {
  console.log("Sending activate email 2 to: " + this);
  setTimeout(function(){
    console.log("- email 2 sent");

    done();
  }, 2000 );
});
