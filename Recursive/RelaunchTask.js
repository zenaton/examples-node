const { task } = require("zenaton");
const { dispatch } = require("../client");

module.exports = task("RelaunchTask", {
  async handle(id, max) {
    console.log(`\nIteration: ${id}`);

    await dispatch.withId(id).workflow("RecursiveWorkflow", id, max);
  }
});
