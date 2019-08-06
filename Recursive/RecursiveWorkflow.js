const { Workflow } = require("zenaton");
const DisplayTask = require("./DisplayTask");
const RelaunchTask = require("./RelaunchTask");

module.exports = Workflow("RecursiveWorkflow", {
  async handle(id, max) {
    this.id = id;
    this.max = max;
    let counter = 0;

    while (counter < 10) {
      await new DisplayTask(counter).execute();
      counter++;
    }

    await new RelaunchTask(this.id, this.max).execute();
  }
});
