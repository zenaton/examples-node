<template>
  <ul class="h-full overflow-scroll" :ref="id">
    <li class="text-gray-100" v-for="(log, i) of logs" v-html="log" :key="i"></li>
  </ul>
</template>

<script>
export default {
  props: {
    id: String,
    logs: Array
  },
  watch: {
    "logs": function (val, oldVal) {
      this.$nextTick(function () {
        const logList = this.$refs[this.id]
        logList.scroll(0,logList.scrollHeight)
      })
    }
  }
}
</script>
