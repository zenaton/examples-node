<template>
  <div id="app">
    <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">WebApp</span>
      </div>
    </nav>
    <Simulator />
  </div>
</template>

<script>
require("codemirror/lib/codemirror.css");
require("codemirror/theme/monokai.css");

import Simulator from "./components/Simulator.vue";

export default {
  components: {
    Simulator
  }
};
</script>
