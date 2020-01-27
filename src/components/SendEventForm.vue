<template>
  <form @submit="submit" class="px-8 pt-6 pb-8 mh-480">
    <h2 class="pb-6">#2 Send Event to a Workflow</h2>
    <div class="mb-4">
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="workflow_selection"
        >Workflow ID</label
      >
      <CustomSelect
        v-model="workflow_selection"
        :options="workflow_instances"
      />
      <FieldErrorMessage :error="errors.workflow_selection" />
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="event_name"
        >Event name</label
      >
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="event_name"
        type="text"
        placeholder="Event name. ex: MyEvent"
        v-model="name"
      />
      <FieldErrorMessage :error="errors.name" />
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="event_data"
        >Event data</label
      >
      <json-textarea id="event_data" v-model="data" />
      <FieldErrorMessage :error="errors.data" />
    </div>

    <submit-button :onClick="submit">Send event</submit-button>
  </form>
</template>

<script>
import JsonTextarea from "../components/JsonTextarea.vue";
import CustomSelect from "../components/CustomSelect.vue";
import FieldErrorMessage from "../components/FieldErrorMessage.vue";
import SubmitButton from "../components/SubmitButton.vue";

export default {
  name: "SendEventForm",
  components: {
    JsonTextarea,
    CustomSelect,
    FieldErrorMessage,
    SubmitButton
  },
  data() {
    return {
      errors: {
        workflow_selection: null,
        name: null,
        data: null
      }
      // workflow_selection: ""
    };
  },
  computed: {
    workflow_instances() {
      return [{ value: 0, text: "-- Choose an instance --" }].concat(
        this.$store.state.workflow_instances
          .filter(x => x.name === this.$store.state.workflow.name)
          .map(x => ({
            value: x.id,
            text: `${x.name} - ${x.id}`
          }))
      );
    },
    name: {
      get() {
        return this.$store.state.event.name;
      },
      set(name) {
        this.$store.dispatch("updateEventName", name);
      }
    },
    data: {
      get() {
        return this.$store.state.event.data;
      },
      set(data) {
        this.$store.dispatch("updateEventData", data);
      }
    },
    workflow_selection: {
      get() {
        return this.$store.state.workflow_selection;
      },
      set(data) {
        this.$store.dispatch("selectWorkflowId", data);
      }
    }
  },
  methods: {
    submit(e) {
      e.preventDefault();

      if (!this.validateForm()) {
        return false;
      }

      this.$store.dispatch("sendEvent", {
        event: {
          name: this.name,
          data: this.data
        },
        workflow_selection: this.workflow_selection
      });
    },
    validateForm() {
      this.errors = {};
      if (this.name == "") {
        this.errors.name = "required";
      }

      console.log("-> this.workflow_selection", typeof this.workflow_selection);
      if (this.workflow_selection == "") {
        this.errors.workflow_selection = "required";
      }

      try {
        JSON.parse(this.data);
      } catch (e) {
        this.errors.data = "Invalid JSON";
      }

      return Object.keys(this.errors).length === 0;
    }
  }
};
</script>
