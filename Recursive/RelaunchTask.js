const { task } = require("zenaton");
const { run } = require("../client");

module.exports = task("RelaunchTask", async (id, max) => {
  console.log(`\nIteration: ${id}`);

  run.withId(id).workflow("RecursiveWorkflow", id, max);
});
