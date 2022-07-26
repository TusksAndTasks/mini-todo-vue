<template>
  <TodoList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoList from "@/components/TodoList.vue";

export default defineComponent({
  name: "App",
  components: {
    TodoList,
  },
});
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}
</style>
