const { Task } = require("zenaton");

module.exports = Task("DisplayTask", {

  async handle(id) {
    console.log(id);

    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
  }
});
