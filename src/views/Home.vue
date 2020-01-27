<template>
  <div class="p-6">
    <div class="flex bg-white shadow-md rounded">
      <div class="w-1/3">
        <DispatchForm />
      </div>
      <div class="w-2/3 bg-gray-800 p-2 font-mono text-sm mh-400">
        <logs id="logListWorkflow" :logs="logs.workflow" />
      </div>
    </div>

    <div class="mt-6 flex bg-white shadow-md rounded">
      <div class="w-1/3">
        <send-event-form />
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
  name: "Home",
  components: {
    Logs,
    DispatchForm,
    SendEventForm
  },
  computed: {
    logs() {
      return this.$store.state.logs;
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
