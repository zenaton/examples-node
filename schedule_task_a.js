require("./client");

const TaskA = require("./Tasks/TaskA");

new TaskA().schedule('* * * * * *');
