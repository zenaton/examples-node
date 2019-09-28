const { task } = require("zenaton");

module.exports = task("DisplayTask", async counter => {
  console.log(counter);

  await new Promise(resolve => {
    setTimeout(resolve, 100);
  });
});
