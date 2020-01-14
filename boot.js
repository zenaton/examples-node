const { task, workflow } = require("zenaton");

// workflow definitions
workflow("SequentialWorkflow", require("./Workflows/SequentialWorkflow"));
workflow("AsynchronousWorkflow", require("./Workflows/AsynchronousWorkflow"));
workflow("WaitWorkflow", require("./Workflows/WaitWorkflow"));
workflow("EventWorkflow", require("./Workflows/EventWorkflow"));
workflow("WaitEventWorkflow", require("./Workflows/WaitEventWorkflow"));
workflow("ErrorWorkflow", require("./Workflows/ErrorWorkflow"));
workflow("VersionWorkflow_v0", require("./Workflows/VersionWorkflow_v0"));
workflow("VersionWorkflow_v1", require("./Workflows/VersionWorkflow_v1"));
workflow("VersionWorkflow_v2", require("./Workflows/VersionWorkflow_v2"));
workflow("ParallelWorkflow", require("./Workflows/ParallelWorkflow"));
workflow("AutomaticRetryWorkflow", require("./Workflows/AutomaticRetryWorkflow"));

// tasks definitions
task("TaskA", require("./Tasks/TaskA"));
task("TaskB", require("./Tasks/TaskB"));
task("TaskC", require("./Tasks/TaskC"));
task("TaskD", require("./Tasks/TaskD"));
task("TaskE", require("./Tasks/TaskE"));
task("TaskWithRetry", require("./Tasks/TaskWithRetry"));

// recursive workflow and its tasks definitions
workflow("RecursiveWorkflow", require("./Recursive/RecursiveWorkflow"));
task("DisplayTask", require("./Recursive/DisplayTask"));
task("RelaunchTask", require("./Recursive/RelaunchTask"));
