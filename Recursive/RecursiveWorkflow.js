var { Workflow, Wait} = require("zenaton");
var DisplayTask = require("./DisplayTask");
var RelaunchTask = require("./RelaunchTask");
var SendEventTask = require("./SendEventTask");

module.exports = Workflow("RecursiveWorkflow", {
  init(id) {
    this.id = id;
    this.counter = 0;
  },
  handle() {
    while (this.counter < 10) {
      new DisplayTask(this.counter).execute();
      this.counter++;
    }

    new SendEventTask(this.id).dispatch();

    new Wait("EndingEvent").execute();

    new RelaunchTask(this.id).execute();

  },
  id() {
    return this.id;
  }
});
