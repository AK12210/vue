<script setup>
defineProps({
  task: { type: Object, required: true }
});

const emit = defineEmits(["delete-task", "toggle-task"]);
</script>

<template>
  <li>
    <span :class="{ completed: task.completed }">
      {{ task.text }} - [{{ task.category }}] ({{ task.priority }})
    </span>

    <button @click="emit('toggle-task')">
      {{ task.completed ? "Undo" : "Mark as completed" }}
    </button>

    <button @click="emit('delete-task')">Delete</button>
  </li>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
  color: gray;
}
</style>
