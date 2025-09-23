<script setup>
import TaskItem from "./TaskItem.vue";

defineProps({
  tasks: { type: Array, required: true }
});

const emit = defineEmits(["delete-task", "toggle-task"]);
</script>

<template>
  <ul>
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @delete-task="emit('delete-task', task.id)"
      @toggle-task="emit('toggle-task', task.id)"
    />
  </ul>
</template>
