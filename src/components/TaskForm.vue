<script setup>
import { ref } from "vue";

const text = ref("");
const category = ref("General");
const priority = ref("Medium");

const emit = defineEmits(["add-task"]);

function submitTask() {
  if (!text.value.trim()) return;
  emit("add-task", {
    text: text.value,
    category: category.value,
    priority: priority.value,
  });
  text.value = "";
  category.value = "General";
  priority.value = "Medium";
}
</script>

<template>
  <form @submit.prevent="submitTask">
    <input v-model="text" placeholder="Enter task" />

    <select v-model="category">
      <option>General</option>
      <option>Work</option>
      <option>Personal</option>
    </select>

    <select v-model="priority">
      <option>Low</option>
      <option>Medium</option>
      <option>High</option>
    </select>

    <button type="submit">Add Task</button>
  </form>
</template>
