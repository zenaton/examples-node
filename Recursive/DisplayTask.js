const { task } = require("zenaton");

module.exports = task("DisplayTask", {
  async handle(counter) {
    console.log(counter);

    await new Promise(resolve => {
      setTimeout(resolve, 100);
    });
  }
});