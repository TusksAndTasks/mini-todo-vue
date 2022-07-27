<template>
  <TodoInput @addNewTODO="addNewItem" />
  <TodoItem
    v-for="todo in TodoList"
    :key="todo.key"
    :value="todo"
    @checkTODO="checkItem"
    @deleteTODO="deleteItem"
  />
</template>

<script lang="ts">
import TodoInput from "@/components/TodoListInput.vue";
import TodoItem from "@/components/TodoListItem.vue";
import { defineComponent } from "vue";
import { ITodoInputData, ITodoItemData } from "@/types/interfaces";

export default defineComponent({
  name: "TodoList",
  data() {
    return {
      TodoList: [] as Array<ITodoItemData>,
    };
  },
  components: {
    TodoItem,
    TodoInput,
  },
  methods: {
    addNewItem(newTODO: ITodoInputData) {
      const todo = { ...newTODO, completed: false };
      this.TodoList.push(todo);
    },
    checkItem(key: number) {
      this.TodoList = this.TodoList.map((todo) => {
        return todo.key === key
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    },
    deleteItem(key: number) {
      this.TodoList = this.TodoList.filter((todo) => todo.key !== key);
    },
  },
});
</script>
