var { Workflow, Wait} = require("zenaton");
var DisplayTask = require("./DisplayTask");
var RelaunchTask = require("./RelaunchTask");

module.exports = Workflow("RecursiveWorkflow", {
  init(id, max) {
    this.id = id;
    this.max = max;
  },
  handle() {
    var counter = 0;

    while (counter < 10) {
      new DisplayTask(counter).execute();
      counter++;
    }

    new RelaunchTask(this.id, this.max).execute();
  },
  id() {
    return this.id;
  }
});
