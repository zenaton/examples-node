<template>
  <form @submit="submit" class="px-8 pt-6 pb-8 mh-400">
    <h2 class="pb-6">#1 Dispatch Workflow</h2>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="workflow_name">Workflow name</label>
        <div class="inline-block relative w-full aaw-64">
        <select
          v-model="workflow.name"
          class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option :key="wfname" :value="wfname" v-for="wfname in workflow_autocomplete" >{{ wfname }}</option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="input">Workflow input</label>
      <json-textarea id="workflow_input" v-model="workflow.input" />
      <p
        v-bind:class="[errors.input ? 'visible' : 'invisible']"
        class="text-red-500 text-xs italic h-1"
      >{{ errors.input }}</p>
    </div>
    <submit-button :onClick="submit">Dispatch</submit-button>
  </form>
</template>


<script>
import JsonTextarea from "../components/JsonTextarea.vue";
import SubmitButton from "../components/SubmitButton.vue";
import {default_workflow,workflows} from "../config";

export default {
  name: "DispatchForm",
  components: {
    JsonTextarea,
    SubmitButton
  },
  data() {
    const input = this.getInputByWorkflowName(default_workflow)

    return {
      errors: {
        name: null,
        input: null
      },
      workflow: {
        name: default_workflow,
        input: JSON.stringify(input, null, 2)
      }
    };
  },
  computed: {
    workflow_autocomplete() {
      return workflows.map(x => x.name)
    }
  },
  watch: {
    "workflow.name": function(newName, oldName) {
      if(newName != oldName) {
        this.workflow.input = JSON.stringify(this.getInputByWorkflowName(newName), null, 2);
      }
    }
  },
  methods: {
    getInputByWorkflowName(name) {
      return workflows.find(w => w.name === name)['input'];
    },
    submit(e) {
      e.preventDefault();

      if (!this.validateForm()) {
        return false;
      }

      this.$emit("dispatch", this.workflow);
    },
    validateForm() {
      this.errors = {};
      if (this.workflow.name == "") {
        this.errors.name = "required";
      }

      let payload = null;
      try {
        payload = JSON.parse(this.workflow.input);
      } catch (e) {
        this.errors.input = "Invalid JSON";
      }

      return Object.keys(this.errors).length === 0;
    }
  }
};
</script>
