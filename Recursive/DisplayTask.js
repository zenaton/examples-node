var {Task} = require("zenaton");

module.exports = Task("DisplayTask", {
  init(id) {
    this.id = id;
  },
  handle(done) {
    process.stdout.write("" + this.id);
    setTimeout(() => {
      done();
    }, 1000);

  }
});
