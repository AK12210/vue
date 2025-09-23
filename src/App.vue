<script setup>
import { ref, computed } from "vue";
import TaskForm from "./components/TaskForm.vue";
import TaskList from "./components/TaskList.vue";

const tasks = ref([]);

const selectedCategory = ref("All");
const showIncomplete = ref(false);

function addTask(newTask) {
  tasks.value.push({
    id: Date.now(),
    text: newTask.text,
    category: newTask.category,
    priority: newTask.priority,
    completed: false,
  });
}

function deleteTask(id) {
  tasks.value = tasks.value.filter(task => task.id !== id);
}

function toggleTask(id) {
  const task = tasks.value.find(t => t.id === id);
  if (task) task.completed = !task.completed;
}

const incompleteCount = computed(() =>
  tasks.value.filter(t => !t.completed).length
);

const categories = computed(() => {
  const cats = tasks.value.map(t => t.category);
  return ["All", ...new Set(cats)];
});

const filteredTasks = computed(() => {
  let result = tasks.value;
  if (showIncomplete.value) {
    result = result.filter(t => !t.completed);
  }
  if (selectedCategory.value !== "All") {
    result = result.filter(t => t.category === selectedCategory.value);
  }
  return result;
});
</script>

<template>
  <main>

    <TaskForm @add-task="addTask" />

    <p v-if="!tasks.length">No tasks available</p>
    <p v-else>Incomplete tasks: {{ incompleteCount }}</p>

    <div>
      <label>
        <input type="checkbox" v-model="showIncomplete" />
        Show only incomplete tasks
      </label>

      <label>
        Category:
        <select v-model="selectedCategory">
          <option v-for="cat in categories" :key="cat">{{ cat }}</option>
        </select>
      </label>
    </div>

    <TaskList
      :tasks="filteredTasks"
      @delete-task="deleteTask"
      @toggle-task="toggleTask"
    />
  </main>
</template>
