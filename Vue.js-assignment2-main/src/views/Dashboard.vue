<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import StudentList from '../components/StudentList.vue'
import { ref } from 'vue'

const props = defineProps({
  students: Array,
  removeStudent: Function
})

const students = ref([
  { id: 1, name: 'Alice Johnson', age: 21 },
  { id: 2, name: 'Michael Smith', age: 22 },
])

const route = useRoute()

const filteredStudents = computed(() => {
  if (route.name === 'under21') {
    return props.students.filter(s => s.age < 21)
  }
  if (route.name === 'over21') {
    return props.students.filter(s => s.age >= 21)
  }
  return props.students
})
</script>

<template>
  <StudentList
    :students="filteredStudents"
    @remove-student="props.removeStudent"
  />
</template>
