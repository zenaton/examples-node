module.exports = {
  port: 4000,
  default_workflow: "ParallelWorkflow",
  workflows: [
    { name: "SequentialWorkflow", input: [], event: [] },
    { name: "ParallelWorkflow", input: [{ a: 12 }], event: [] },
    { name: "AsynchronousWorkflow", input: [], event: [] },
    { name: "WaitWorkflow", input: [], event: [] },
    { name: "EventWorkflow", input: [], event: [] },
    { name: "WaitEventWorkflow", input: [], event: [] },
    { name: "ErrorWorkflow", input: [], event: [] },
    { name: "AutomaticRetryWorkflow", input: [], event: [] },
    { name: "VersionWorkflow", input: [], event: [] },
    { name: "VersionWorkflow_v0", input: [], event: [] },
    { name: "VersionWorkflow_v1", input: [], event: [] },
    { name: "VersionWorkflow_v2", input: [], event: [] },
  ]
};
