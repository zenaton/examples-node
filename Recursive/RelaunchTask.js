const { Task, Dispatch } = require("zenaton");

module.exports = Task("RelaunchTask", {
  async handle(id, max) {
    console.log(`\nIteration: ${id}`);

    await Dispatch.workflow("RecursiveWorkflow", id, max);
  }
});
