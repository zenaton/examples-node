const { Task } = require("zenaton");

module.exports = Task("DisplayTask", {
  async handle(counter) {
    console.log(counter);

    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
  }
});