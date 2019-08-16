require("./client");
require("./Workflows/SequentialWorkflow");
require("./Workflows/AsynchronousWorkflow");
require("./Workflows/WaitWorkflow");
require("./Workflows/EventWorkflow");
require("./Workflows/WaitEventWorkflow");
require("./Workflows/ErrorWorkflow");
require("./Workflows/VersionWorkflow_v0");
require("./Workflows/VersionWorkflow_v1");
require("./Workflows/VersionWorkflow_v2");

require("./Tasks/TaskA");
require("./Tasks/TaskB");
require("./Tasks/TaskC");
require("./Tasks/TaskD");
require("./Tasks/TaskE");
// require("./Workflows/ParallelWorkflow");

require("./Recursive/RecursiveWorkflow");
require("./Recursive/DisplayTask");
require("./Recursive/RelaunchTask");

require("./Recursive_old/RecursiveWorkflow");
