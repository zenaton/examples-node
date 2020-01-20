<template>
  <div>
    <div class="shadow border" v-bind:class="{ 'border-red-500': error }">
      <textarea :name="id" :id="id" v-model="input"></textarea>
    </div>
  </div>
</template>

<script>
import CodeMirror from "codemirror";
import "codemirror/mode/javascript/javascript.js";

export default {
  name: "JsonTextarea",
  props: {
    id: { type: String },
    value: { type: String },
    onChangeInput: { type: Function }
  },
  data: function() {
    return {
      editor: null,
      input: this.value,
      error: false
    };
  },
  mounted() {
    this.editor = CodeMirror.fromTextArea(document.getElementById(this.id), {
      lineNumbers: true
    });
    this.editor.on("change", cm => {
      this.onChangeInput(cm.getValue());
    });
  }
};
</script>

<style>
.CodeMirror {
  height: 100px;
}
</style>