const {Task} = require("zenaton");

module.exports = Task("TaskE", function(done) {

  console.log("Task E starts");

  throw new Error('Error in TaskE');

  console.log("Task E ends");

  done();
});
