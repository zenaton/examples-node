# Zenaton examples for Node.js
This repository contains examples of workflows built with Zenaton. These examples illustrates how Zenaton orchestrates tasks that are executed on different workers.

## Installation
Download this repo
```
git clone https://github.com/zenaton/examples-node.git
```
then add an .env file
```
cd examples-node; npm install ; cp -n .env.example .env
```
and populate it with your application id and api token found [here](https://zenaton.com/app/api).

Then, you need to install a Zenaton worker
```
curl https://install.zenaton.com | sh
```
and start it, and make it listen to your configuration:
```
zenaton start; zenaton listen --env=.env --boot=boot.js
```
Your all set!


*Your workflows will be processed by your worker, so you won't see anything except the stdout and stderr, respectively `zenaton.out` and `zenaton.err`. Look at these files :)*

## Example 1 : Sequential tasks execution
[This example](https://github.com/zenaton/examples-node/tree/master/Sequential) showcases
- a sequential execution of two tasks. The second task is executed only when the first one is processed.
- the result of the first task can be used by the second one.

```
node launch_sequential.js
```

## Example 2: Parallel tasks execution
[This example](https://github.com/zenaton/examples-node/tree/master/Parallel) showcases
- a parallel execution of 2 tasks
- a third task that is executed only after *both* first two tasks were processed


```
node launch_parallel.js
```

## Example 3: Asynchronous tasks execution
[this example](https://github.com/zenaton/examples-node/tree/master/Asynchronous) showcases
- an asynchronous execution of multiple tasks

```
node launch_asynchronous.js
```

When a task is dispatched asynchronously, the workflow continues its execution without waiting for the task completion. Consequently, a task asynchronous dispatching always returns a null value.

## Example 4: Event
[This example](https://github.com/zenaton/examples-node/tree/master/Event) showcases
- how to change a workflow's behaviour based on an external event

```
node launch_event.js
```

## Example 5: Wait
[This example](https://github.com/zenaton/examples-node/tree/master/Wait) showcases
- how the provided `Wait` task can be used to pause the workflow for a specified duration

```
node launch_wait.js
```

## Example 6: Wait Event
[This example](https://github.com/zenaton/examples-node/tree/master/WaitEvent) showcases
- how the provided `Wait` task can also be used to pause the workflow up to receiving a specific external event

```
node launch_wait_event.js
```

## Example7: Recursive Workflow
[This example](https://github.com/zenaton/examples-node/tree/master/Recursive) showcases
- how launching events or workflows directly from orchestrated tasks allows you to schedule recurring workflows

```
node launch_recursive.js
```

## Example8: Workflow Versions
[This example](https://github.com/zenaton/examples-node/tree/master/Version) showcases
- how to update your workflow implementation, even while previous versions are still running

```
node launch_version.js
```
