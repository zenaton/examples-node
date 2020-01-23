<template>
  <form @submit="submit" class="px-8 pt-6 pb-8 mh-400">
    <h2 class="pb-6">#1 Dispatch Workflow</h2>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="workflow_name">Workflow name</label>
      <input
        v-bind:class="{ 'border-red-500': errors.name }"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="workflow_name"
        type="text"
        placeholder="Workflow name. ex: SequentialWorkflow"
        v-model="workflow.name"
        list="workflows"
      />
      <p
        v-bind:class="[errors.name ? 'visible' : 'invisible']"
        class="text-red-500 text-xs italic h-1"
      >{{ errors.name }}</p>
      <datalist id="workflows">
        <template v-for="wfname of workflow_autocomplete">
          <option :value="wfname" :key="wfname" />
        </template>
      </datalist>
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
    return {
      errors: {
        name: null,
        input: null
      },
      workflow: {
        name: default_workflow,
        input: JSON.stringify([{ foo: "bar" }], null, 2)
      }
    };
  },
  computed: {
    workflow_autocomplete() {
      return workflows.map(x => x.name)
    }
  },
  methods: {
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
