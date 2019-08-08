const { Workflow } = require("zenaton");

module.exports = Workflow("SequentialWorkflow", {
  async handle() {
    let a = await this.execute.task('TaskA');

    if (0 < a) {
      await this.execute.task('TaskB');
    } else {
      await this.execute.task('TaskC');
    }
    
    await this.execute.task('TaskD');
  }
});
