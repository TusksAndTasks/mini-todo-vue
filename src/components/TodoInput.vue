<template>
  <input type="text" v-model="inputValue" />
  <button @click="addItem">Create</button>
</template>

<script>
export default {
  name: "TodoInput",
  data() {
    return {
      inputValue: "",
    };
  },
  emits: ["addNewTODO"],
  methods: {
    addItem() {
      this.$emit("addNewTODO", {
        textContent: this.inputValue,
        key: Date.now(),
      });
      this.inputValue = "";
    },
  },
};
</script>

<style></style>
