const { run } = require("../client");

module.exports.handle = async (id, max) => {
  console.log(`\nIteration: ${id}`);

  run.withTag(id).workflow("RecursiveWorkflow", id, max);
};
