<template>
  <div class="p-6">
    <div class="flex bg-white shadow-md rounded">
      <div class="w-1/3">
        <form @submit="dispatch" class="px-8 pt-6 pb-8 mh-400">
          <h2 class="pb-6">#1 Dispatch Workflow</h2>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="workflow_name">Workflow name</label>
            <input
              v-bind:class="{ 'border-red-500': errors.workflow.name }"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="workflow_name"
              type="text"
              placeholder="Workflow name. ex: SequentialWorkflow"
              v-model="workflow.name"
              list="workflows"
            />
            <p v-bind:class="[errors.workflow.name ? 'visible' : 'invisible']" class="text-red-500 text-xs italic h-1">{{ errors.workflow.name }}</p>
            <datalist id="workflows">
              <template v-for="wfname of workflow_autocomplete">
                <option :value="wfname" :key="wfname" />
              </template>
            </datalist>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="input">Workflow input</label>
            <json-textarea id="workflow_input" :onChangeInput="onChangeWfInput" :value="workflow.input" />
            <p v-bind:class="[errors.workflow.input ? 'visible' : 'invisible']" class="text-red-500 text-xs italic h-1">{{ errors.workflow.input }}</p>
          </div>
          <submit-button :onClick="dispatch">Dispatch</submit-button>
        </form>
      </div>
      <div class="w-2/3 bg-gray-800 p-2 font-mono text-sm mh-400">
        <logs id="logListWorkflow" :logs="logs.workflow" />
      </div>
    </div>

    <div class="mt-6 flex bg-white shadow-md rounded">
      <div class="w-1/3">
        <form @submit="send_event" class="px-8 pt-6 pb-8 mh-430">
          <h2 class="pb-6">#2 Send Event to a Workflow</h2>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="workflow_selection">Workflow ID</label>
              <div class="inline-block relative w-full aaw-64">
                <select v-model="workflow_selection" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option :key="instance.id" :value="instance.id" v-for="instance in workflow_instances">{{ `${instance.name} - ${instance.id}` }}</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            <p v-bind:class="[errors.event.workflow_selection ? 'visible' : 'invisible']" class="text-red-500 text-xs italic h-1">{{ errors.event.workflow_selection }}</p>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="event_name">Event name</label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="event_name"
              type="text"
              placeholder="Event name. ex: MyEvent"
              v-model="event.name"
            />
            <p v-bind:class="[errors.event.name ? 'visible' : 'invisible']" class="text-red-500 text-xs italic h-1">{{ errors.event.name }}</p>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="event_data">Event data</label>
            <json-textarea id="event_data" :onChangeInput="onChangeEventData" :value="event.data" />
            <p v-bind:class="[errors.event.data ? 'visible' : 'invisible']" class="text-red-500 text-xs italic h-1">{{ errors.event.data }}</p>
          </div>

          <submit-button :disabled="!workflow.name" :onClick="send_event">Send event</submit-button>
        </form>
      </div>
      <div class="w-2/3 bg-gray-800 p-2 font-mono text-sm mh-430">
        <logs id="logListEvent" :logs="logs.event" />
      </div>
    </div>
  </div>
</template>

<script>
import JsonTextarea from "../components/JsonTextarea.vue";
import Logs from "../components/Logs.vue";
import SubmitButton from "../components/SubmitButton.vue";

export default {
  name: "Simulator",
  components: {
    JsonTextarea,
    Logs,
    SubmitButton
  },
  data() {
    return {
      errors: {
        workflow: {
          name: null, input: null
        },
        event: {
          workflow_selection: null, name: null, data: null
        }
      },
      isBlinking: false,
      logs: {
        workflow: [],
        event: []
      },
      workflow_instances: [],
      workflow_selection: '',
      workflow: {
        name: "SequentialWorkflow",
        input: JSON.stringify([{ foo: "bar" }], null, 2)
      },
      event: {
        name: "MyEvent",
        data: JSON.stringify([{ email: "john@acme.fr" }], null, 2)
      }
    };
  },
  computed: {
    workflow_autocomplete() {
      return [
        "AsynchronousWorkflow",
        "AutomaticRetryWorkflow",
        "ErrorWorkflow",
        "EventWorkflow",
        "ParallelWorkflow",
        "SequentialWorkflow",
        "VersionWorkflow",
        "VersionWorkflow_v0",
        "VersionWorkflow_v1",
        "VersionWorkflow_v2",
        "WaitEventWorkflow",
        "WaitWorkflow"
      ];
    }
  },
  methods: {
    onChangeWfInput(input) {
      this.workflow.input = input;
    },
    onChangeEventData(data) {
      this.event.data = data;
    },
    async dispatch(e) {
      e.preventDefault();

      this.errors.workflow = {}
      if(this.workflow.name == '') {
        this.errors.workflow.name = "required"
      }

      let payload = null
      try {
        payload = JSON.parse(this.workflow.input)
      } catch (e) {
        this.errors.workflow.input = 'Invalid JSON'
      }

      if(Object.keys(this.errors.workflow).length) {
        return false
      }

      const {id} = await this.post(`/api/${this.workflow.name}/dispatch`, payload);
      // const id = '0149660c-4d90-45cd-a5bc-ce26303639af'
      console.log(`dispatch !`, id);

      this.workflow_instances.push({id, name: this.workflow.name})
      this.logs.workflow.push({
        meta: {wf_id: id},
        text: `[${new Date().toISOString()}] Dispatch <span class="text-yellow-400">${this.workflow.name}</span> with id <span class="text-green-400">${id}</span>`
      })
    },
    async send_event(e) {
      e.preventDefault();

      this.errors.event = {}

      if(this.workflow_selection == '') {
        this.errors.event.workflow_selection = "required"
      }

      if(this.event.name && this.event.name == '') {
        this.errors.event.name = "required"
      }

      let payload = null
      try {
        payload = {
          name: this.event.name,
          data: JSON.parse(this.event.data)
        }
      } catch (e) {
        this.errors.event.data = 'Invalid JSON'
      }

      if(Object.keys(this.errors.event).length) {
        return false
      }
      console.log(`send_event !`);

      await this.post(`/api/${this.workflow.name}/event`, payload);
      this.logs.event.push({
        text:`[${new Date().toISOString()}] Send event <span class="text-yellow-400">${this.event.name}</span> to workflow id <span class="text-green-400">${this.workflow_selection}</span>`
      })
    },
    curl_launch() {
      const payload = JSON.stringify(this.workflow);

      return `curl -X POST https://gateway.zenaton.com/rest-api/v1/instances \\
  -H "Content-Type: application/json" \\
  -H "Accept: application/json" \\
  -H "app-env: sandbox" \\
  -H "app-id: MYPITXAOVS" \\
  -H "api-token: 5z4ykmAIBiSlg9YfvnUUUQC2aIvYCMTXjUwxX6rb0PLMxPkVIxYQTx5vyxDq" \\
  -d '${payload}'`;
    },
    curl_event() {
      const payload = JSON.stringify(this.event);

      return `curl -X POST https://gateway.zenaton.com/rest-api/v1/instances/:intent_id/event \\
  -H "Content-Type: application/json" \\
  -H "Accept: application/json" \\
  -H "app-env: sandbox" \\
  -H "app-id: MYPITXAOVS" \\
  -H "api-token: 5z4ykmAIBiSlg9YfvnUUUQC2aIvYCMTXjUwxX6rb0PLMxPkVIxYQTx5vyxDq" \\
  -d '${payload}'`;
    },
    post(url, payload) {
      return fetch(url, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).then((response) => { return response.json() })
    }
  }
};
</script>

<style scoped>
  .mh-400 {
    height: 400px;
  }
  .mh-430 {
    height: 480px;
  }
  @keyframes blinking {
    0%{
      border: 1px solid rgb(226, 232, 240);
    }
    40%{
      border: 1px solid #68d391;
      background-color: #68d391;
    }    
  }
  .blink{
    animation: blinking 0.2s 2;
  }
</style>