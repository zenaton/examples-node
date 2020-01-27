module.exports = {
  default_workflow: "ParallelWorkflow",
  workflows: [
    { name: "SequentialWorkflow", input: [], event: { name: "", data: [] } },
    {
      name: "ParallelWorkflow",
      input: [],
      event: { name: "", data: [] }
    },
    { name: "AsynchronousWorkflow", input: [], event: { name: "", data: [] } },
    { name: "WaitWorkflow", input: [], event: { name: "", data: [] } },
    { name: "EventWorkflow", input: [], event: { name: "", data: [] } },
    {
      name: "WaitEventWorkflow",
      input: [],
      event: { name: "MyEvent", data: [{ email: "john@example.com" }] }
    },
    { name: "ErrorWorkflow", input: [], event: { name: "", data: [] } },
    {
      name: "AutomaticRetryWorkflow",
      input: [],
      event: { name: "", data: [] }
    },
    { name: "VersionWorkflow", input: [], event: { name: "", data: [] } },
    { name: "VersionWorkflow_v0", input: [], event: { name: "", data: [] } },
    { name: "VersionWorkflow_v1", input: [], event: { name: "", data: [] } },
    { name: "VersionWorkflow_v2", input: [], event: { name: "", data: [] } }
  ]
};
