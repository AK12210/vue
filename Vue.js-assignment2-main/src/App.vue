<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import StudentForm from './components/AddStudentForm.vue'
import StudentList from './components/StudentList.vue'

const router = useRouter()

const students = ref([
  { id: 1, name: 'Alice Johnson', age: 21 },
  { id: 2, name: 'Michael Smith', age: 22 },
])

const addStudent = (student) => {
  students.value.push({
    id: Date.now(),
    ...student
  })
}

const removeStudent = (id) => {
  students.value = students.value.filter(s => s.id !== id)
}
</script>

<template>

  <div style="margin-top: 20px; display: flex; gap: 10px;">
    <button @click="router.push('/')">All</button>
    <button @click="router.push('/under-21')">Under 21</button>
    <button @click="router.push('/over-21')">Over 21</button>
  </div>

  <router-view
    v-slot="{ Component }"
    :students="students"
    :remove-student="removeStudent"
  >
  </router-view>
</template>
