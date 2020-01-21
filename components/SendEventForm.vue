<template>
  <form @submit="submit" class="px-8 pt-6 pb-8 mh-480">
    <h2 class="pb-6">#2 Send Event to a Workflow</h2>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="workflow_selection">Workflow ID</label>
      <div class="inline-block relative w-full aaw-64">
        <select
          v-model="workflow_selection"
          class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option
            :key="instance.id"
            :value="instance.id"
            v-for="instance in workflow_instances"
          >{{ `${instance.name} - ${instance.id}` }}</option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <p
        v-bind:class="[errors.workflow_selection ? 'visible' : 'invisible']"
        class="text-red-500 text-xs italic h-1"
      >{{ errors.workflow_selection }}</p>
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
      <p
        v-bind:class="[errors.name ? 'visible' : 'invisible']"
        class="text-red-500 text-xs italic h-1"
      >{{ errors.name }}</p>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="event_data">Event data</label>
      <json-textarea id="event_data" v-model="event.data" />
      <p
        v-bind:class="[errors.data ? 'visible' : 'invisible']"
        class="text-red-500 text-xs italic h-1"
      >{{ errors.data }}</p>
    </div>

    <submit-button :onClick="submit">Send event</submit-button>
  </form>
</template>


<script>
import JsonTextarea from "../components/JsonTextarea.vue";
import SubmitButton from "../components/SubmitButton.vue";

export default {
  name: "SendEventForm",
  props: {
    workflow_instances: Array
  },
  components: {
    JsonTextarea,
    SubmitButton
  },
  data() {
    return {
      errors: {
        workflow_selection: null,
        name: null,
        data: null
      },
      workflow_selection: "",
      event: {
        name: "MyEvent",
        data: JSON.stringify([{ email: "john@acme.fr" }], null, 2)
      }
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();

      if (!this.validateForm()) {
        return false;
      }

      this.$emit("send-event", {
        event: this.event,
        workflow_selection: this.workflow_selection
      });
    },
    validateForm() {
      this.errors = {};
      if (this.event.name == "") {
        this.errors.name = "required";
      }

      if (this.workflow_selection == "") {
        this.errors.workflow_selection = "required";
      }

      let payload = null;
      try {
        payload = JSON.parse(this.event.data);
      } catch (e) {
        this.errors.data = "Invalid JSON";
      }

      return Object.keys(this.errors).length === 0;
    }
  }
};
</script>
