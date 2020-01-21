<template>
  <div class="p-6">
    <div class="flex bg-white shadow-md rounded">
      <div class="w-1/3">
        <dispatch-form v-on:dispatch="onDispatch" />
      </div>
      <div class="w-2/3 bg-gray-800 p-2 font-mono text-sm mh-400">
        <logs id="logListWorkflow" :logs="logs.workflow" />
      </div>
    </div>

    <div class="mt-6 flex bg-white shadow-md rounded">
      <div class="w-1/3">
        <send-event-form :workflow_instances="workflow_instances" v-on:send-event="onSendEvent"/>
      </div>
      <div class="w-2/3 bg-gray-800 p-2 font-mono text-sm mh-480">
        <logs id="logListEvent" :logs="logs.event" />
      </div>
    </div>
  </div>
</template>

<script>
import DispatchForm from "../components/DispatchForm.vue";
import SendEventForm from "../components/SendEventForm.vue";
import Logs from "../components/Logs.vue";

export default {
  name: "Simulator",
  components: {
    Logs,
    DispatchForm,
    SendEventForm
  },
  data() {
    return {
      logs: {
        workflow: [],
        event: []
      },
      workflow_instances: [],
    };
  },
  methods: {
    async onDispatch(data) {
      console.log("onDispatch ->", data)
      const {name, input} = data;

      // CALL API service
      const payload = JSON.parse(input)
      const {id} = await this.post(`/api/${name}/dispatch`, payload);
      // const id = '0149660c-4d90-45cd-a5bc-ce26303639af'
      console.log(`dispatch !`, id);

      this.workflow_instances.push({id, name})

      this.logs.workflow.push(`[${new Date().toISOString()}] Dispatch <span class="text-yellow-400">${name}</span> with id <span class="text-green-400">${id}</span>`)
    },
    async onSendEvent(data) {
      console.log("onSendEvent ->", data)
      const {event, workflow_selection} = data;

      const payload = {
          name: event.name,
          data: JSON.parse(event.data)
        }
        
      await this.post(`/api/${workflow_selection}/event`, payload);

      this.logs.event.push(`[${new Date().toISOString()}] Send event <span class="text-yellow-400">${event.name}</span> to workflow id <span class="text-green-400">${workflow_selection}</span>`)
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
  .mh-480 {
    height: 480px;
  }
</style>