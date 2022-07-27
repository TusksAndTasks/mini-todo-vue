<template>
  <input type="text" v-model="inputValue" @keyup.enter="addItem" />
  <button @click="addItem">Create</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ITodoInputData } from "@/types/interfaces";

export default defineComponent({
  name: "TodoInput",
  data() {
    return {
      inputValue: "",
    };
  },
  emits: {
    addNewTODO(payload: ITodoInputData) {
      return payload.textContent.length > 0;
    },
  },
  methods: {
    addItem() {
      this.$emit("addNewTODO", {
        textContent: this.inputValue,
        key: Date.now(),
      });
      this.inputValue = "";
    },
  },
});
</script>

<style></style>
