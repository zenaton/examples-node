<template>
  <div>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      required
      :list="id + '_list'"
      :id="id" :placeholder="placeholder"
    />
    <datalist :id="id + '_list'">
      <template v-for="item of suggestions">
        <option :value="item" :key="item" />
      </template>
    </datalist>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    placeholder: String,
    suggestions: Array
  },
};
</script>
