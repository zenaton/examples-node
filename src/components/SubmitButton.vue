<template>
  <div class="flex items-center justify-between">
    <button
      :class="cssClasses"
      type="submit"
      @click="onClick"
      :disabled="disabled"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    onClick: { type: Function },
    disabled: { type: Boolean }
  },
  computed: {
    cssClasses() {
      return this.disabled
        ? "bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
        : "bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline";
    }
  }
};
</script>
