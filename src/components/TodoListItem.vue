<template>
  <div class="todo-item">
    <input
      v-if="!value.completed"
      type="checkbox"
      @change="$emit('checkTODO', value.key)"
    />
    <div class="todo-item-basics">
      <div :class="{ completed: value.completed }">{{ value.textContent }}</div>
      <button class="delete-button" @click="$emit('deleteTODO', value.key)">
        &#10060;
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ITodoItemData } from "@/types/interfaces";

export default defineComponent({
  props: {
    value: Object as PropType<ITodoItemData>,
  },
  emits: {
    checkTODO(payload: string) {
      return payload;
    },
    deleteTODO(payload: string) {
      return payload;
    },
  },
});
</script>

<style>
.completed {
  color: gray;
  text-decoration: line-through;
}
.todo-item {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 200px;
  margin-top: 20px;
  border: 2px solid #5d2828;
  padding: 10px;
}
.todo-item-basics {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-left: 20px;
}

.delete-button {
  background: transparent;
  border: none;
}
</style>
