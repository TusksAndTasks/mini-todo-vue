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

<script>
import TodoInput from "@/components/TodoInput";
import TodoItem from "@/components/TodoItem";

export default {
  name: "TodoList",
  data() {
    return {
      TodoList: [],
    };
  },
  components: {
    TodoItem,
    TodoInput,
  },
  methods: {
    addNewItem(newTODO) {
      const todo = { ...newTODO, completed: false };
      this.TodoList.push(todo);
    },
    checkItem(key) {
      this.TodoList = this.TodoList.map((todo) => {
        return todo.key === key
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    },
    deleteItem(key) {
      this.TodoList = this.TodoList.filter((todo) => todo.key !== key);
    },
  },
};
</script>
