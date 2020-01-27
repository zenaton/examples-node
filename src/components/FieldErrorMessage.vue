<template>
  <p
    v-bind:class="[error ? 'visible' : 'invisible']"
    class="text-red-500 text-xs italic h-1"
  >
    {{ error }}
  </p>
</template>

<script>
export default {
  props: {
    error: String
  }
};
</script>
