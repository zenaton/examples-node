const { task, dispatch } = require("zenaton");

module.exports = task("RelaunchTask", {
  async handle(id, max) {
    console.log(`\nIteration: ${id}`);

    await dispatch.workflow("RecursiveWorkflow", id, max);
  }
});
