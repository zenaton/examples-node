<p align="center">
  <a href="https://zenaton.com" target="_blank">
    <img src="https://user-images.githubusercontent.com/36400935/58254828-e5176880-7d6b-11e9-9094-3f46d91faeee.png" target="_blank" />
  </a><br>
  Easy Asynchronous Jobs Manager for Developers <br>
  <a href="https://zenaton.com/documentation/node/getting-started/" target="_blank">
    <strong> Explore the docs » </strong>
  </a><br>
  <a href="https://zenaton.com" target="_blank"> Website </a>
    ·
  <a href="https://github.com/zenaton/zenaton-node" target="_blank"> Node.js Library </a>
    ·
  <a href="https://app.zenaton.com/tutorial/node" target="_blank"> Tutorial in Node.js </a> <br>
</p>


# Zenaton examples for Node.js

[Zenaton](https://zenaton.com) helps developers to easily run, monitor and orchestrate background jobs on your workers without managing a queuing system.
In addition to this, a monitoring dashboard shows you in real-time tasks executions and helps you to handle errors.

This repository contains examples of workflows built with Zenaton. These examples illustrates how Zenaton orchestrates tasks that are executed on different workers.


## Installation
Download this repo
```
git clone https://github.com/zenaton/examples-node.git && cd examples-node
```
then add an .env file
```
cp -n .env.example .env
```
and populate it with your application id and api token found [here](https://app.zenaton.com/api).
Install dependencies
```
yarn
```
### Running on Docker
Simply run
```
docker-compose build; docker-compose up
```
You can check that your agent is running [here](https://app.zenaton.com/agents).

You're all set!

### Running Locally
Then, you need to install the Zenaton agent
```
curl https://install.zenaton.com | sh
```
and start it, and make it listen to your configuration:
```
zenaton start; zenaton listen --env=.env --boot=boot.js
```
You're all set!


*Your workflows will be processed by your worker, so you won't see anything except the stdout and stderr, respectively `zenaton.out` and `zenaton.err`. Look at these files :)*

## Example 1: Single task execution

[This example](https://github.com/zenaton/examples-node/tree/master/Tasks/TaskA.js) showcases

- A single execution of a task.

```sh
node launch_single_task.js
```

## Example 2 : Sequential tasks execution
[This example](https://github.com/zenaton/examples-node/tree/master/Workflows/SequentialWorkflow.js) showcases
- a sequential execution of three tasks. The second and third tasks are executed only when the previous one is processed.
- In a sequential task execution, you can get the output of a task. The result of a task can be used by the next one.

<p align="center">
    <br>
    <img
        src="https://raw.githubusercontent.com/zenaton/resources/master/examples/images/png/flow_sequential.png"
        width="324px"
        alt="Sequential Workflow Diagram"
    /> <img src="https://user-images.githubusercontent.com/36400935/58274921-30de0800-7d94-11e9-8e01-47d63f341147.gif" width="400px"/>
</p>

```node
node launch_sequential.js
```

## Example 3: Parallel tasks execution
[This example](https://github.com/zenaton/examples-node/tree/master/Workflows/ParallelWorkflow.js) showcases
- a parallel execution of 2 tasks
- a third task that is executed only after *both* first two tasks were processed

<p align="center">
    <img
        src="https://raw.githubusercontent.com/zenaton/resources/master/examples/images/png/flow_parallel.png"
         width="324px"
        alt="Parallel Workflow Diagram"
    />
    <img src="https://user-images.githubusercontent.com/36400935/58277197-751fd700-7d99-11e9-8fff-d7c483c8abaf.gif" width="400px"/>
    
</p>

```node
node launch_parallel.js
```

## Example 4: Asynchronous tasks execution
[this example](https://github.com/zenaton/examples-node/tree/master/Workflows/AsynchronousWorkflow.js) showcases
- Asynchronous executions of Task A and Task B (fire and forget)
- Then sequential executions of Task C and Task D


<p align="center">
    <img
        src="https://raw.githubusercontent.com/zenaton/resources/master/examples/images/png/flow_async.png"
        width="324px"
        alt="Asynchronous Workflow Diagram"
    />
    <img src="https://user-images.githubusercontent.com/36400935/58277203-78b35e00-7d99-11e9-9ae8-cfa92757623f.gif" width="400px"/>
    
</p>

```node
node launch_asynchronous.js
```

When a task is dispatched asynchronously, the workflow continues its execution without waiting for the task completion. Consequently, a task asynchronous dispatching always returns a null value.

## Example 5: Event
[This example](https://github.com/zenaton/examples-node/tree/master/Workflows/EventWorkflow.js) showcases
- how to change a workflow's behaviour based on an external event

<p align="center">
    <img
        src="https://raw.githubusercontent.com/zenaton/resources/master/examples/images/png/flow_react_event.png"
        width="324px"
        alt="Event Workflow Diagram"
    />
    <img src="https://user-images.githubusercontent.com/36400935/58276729-769ccf80-7d98-11e9-8ebc-d70ec82dd73b.gif" width="400px"/>
</p>

```node
node launch_event.js
```

## Example 6: Wait
[This example](https://github.com/zenaton/examples-node/tree/master/Workflows/WaitWorkflow.js) showcases
- how the provided `Wait` task can be used to pause the workflow for a specified duration

<p align="center">
    <img
        src="https://raw.githubusercontent.com/zenaton/resources/master/examples/images/png/flow_wait.png"
        width="324px"
        alt="Wait Workflow Diagram"
    />
    <img src="https://user-images.githubusercontent.com/36400935/58276731-78669300-7d98-11e9-97b7-fbe0a39ecba0.gif" width="400px"/>
</p>

```node
node launch_wait.js
```

## Example 7: Wait Event
[This example](https://github.com/zenaton/examples-node/tree/master/Workflows/WaitEventWorkflow.js) showcases
- how the provided `Wait` task can also be used to pause the workflow up to receiving a specific external event

<p align="center">
    <img
        src="https://raw.githubusercontent.com/zenaton/resources/master/examples/images/png/flow_wait_event.png"
        width="324px"
        alt="WaitEvent Workflow Diagram"
    />
    <img src="https://user-images.githubusercontent.com/36400935/58277648-7ac9ec80-7d9a-11e9-9b7b-58ca65809d00.gif" width="400px"/>
</p>

```node
node launch_wait_event.js
```

## Example 8: Recursive Workflow
[This example](https://github.com/zenaton/examples-node/tree/master/Recursive) showcases
- how launching events or workflows directly from orchestrated tasks allows you to schedule recurring workflows

```node
node launch_recursive.js
```

## Example 9: Workflow Versions
[This example](https://github.com/zenaton/examples-node/tree/master/Workflows/VersionWorkflow.js) showcases
- how to update your workflow implementation, even while previous versions are still running

```node
node launch_version.js
```

## Example 10: Managing Errors
[This example](https://github.com/zenaton/examples-node/tree/master/Workflows/ErrorWorkflow.js) showcases
- how a failed task appear on Zenaton website
- how to retry a failed task using the retry button

<p align="center">
    <img
        src="https://raw.githubusercontent.com/zenaton/resources/master/examples/images/png/flow_error.png"
        width="324px"
        alt="Error Workflow Diagram"
    />
     <img src="https://user-images.githubusercontent.com/36400935/58315058-1007c800-7e11-11e9-8bbb-7b1fb8e5bdbb.gif" width="400px"/>
</p>

```node
node launch_error.js
```

## Example 11: Automatic retry of failed tasks
[This example](https://github.com/zenaton/examples-node/tree/master/Tasks/TaskWithRetry.js) showcases
- how a failed task can be retried automatically
- how to customize the automatic retry policy

```node
node launch_automatic_retry.js
```

## Example 12: Schedule a task
[This example](https://github.com/zenaton/examples-js/tree/master/schedule_task_a.js) showcases
- how to schedule a task to make it run periodically

```node
node schedule_task_a.js
```
