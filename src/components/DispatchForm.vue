<template>
  <form @submit="submit" class="px-8 pt-6 pb-8 mh-400">
    <h2 class="pb-6">#1 Dispatch Workflow</h2>
    <div class="mb-4">
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="workflow_name"
        >Workflow name</label
      >
      <CustomSelect v-model="name" :options="workflow_autocomplete" />
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="input"
        >Workflow input</label
      >
      <json-textarea id="workflow_input" v-model="wfinput" />
      <FieldErrorMessage :error="errors.input" />
    </div>
    <submit-button :onClick="submit">Dispatch</submit-button>
  </form>
</template>

<script>
import JsonTextarea from "../components/JsonTextarea.vue";
import SubmitButton from "../components/SubmitButton.vue";
import CustomSelect from "../components/CustomSelect.vue";
import FieldErrorMessage from "../components/FieldErrorMessage.vue";
import { workflows } from "../config";

export default {
  name: "DispatchForm",
  components: {
    JsonTextarea,
    SubmitButton,
    FieldErrorMessage,
    CustomSelect
  },
  data() {
    return {
      errors: {
        name: null,
        input: null
      }
    };
  },
  computed: {
    name: {
      get() {
        return this.$store.state.workflow.name;
      },
      set(name) {
        this.$store.dispatch("updateWorkflowName", name);
      }
    },
    wfinput: {
      get() {
        return this.$store.state.workflow.input;
      },
      set(input) {
        this.$store.dispatch("updateWorkflowInput", input);
      }
    },
    workflow_autocomplete() {
      return workflows.map(x => ({ value: x.name, text: x.name }));
    }
  },
  methods: {
    submit(e) {
      e.preventDefault();

      if (!this.validateForm()) {
        return false;
      }

      this.$store.dispatch("dispatchWorkflow", {
        name: this.name,
        input: this.wfinput
      });
    },
    validateForm() {
      this.errors = {};
      if (this.name == "") {
        this.errors.name = "required";
      }

      try {
        JSON.parse(this.wfinput);
      } catch (e) {
        this.errors.input = "Invalid JSON";
      }

      return Object.keys(this.errors).length === 0;
    }
  }
};
</script>
