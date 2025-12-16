<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['submit-comment'])

const form = reactive({
  email: '',
  comment: '',
  error: ''
})

function submitForm() {
  if (!form.email.includes('@') || form.comment.length < 5) {
form.error = 'Invalid input'
return
}

  emit('submit-comment', {
    email: form.email,
    comment: form.comment
  })

  form.email = ''
  form.comment = ''
  form.error = ''
}
</script>

<template>
  <input v-model="form.email" placeholder="Email" />
  <textarea v-model="form.comment" />

  <p v-if="form.error">{{ form.error }}</p>

  <button v-on:click="submitForm">Submit</button>
</template>

<style scoped>
input,
textarea {
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 12px;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-family: inherit;
  font-size: 14px;
}

textarea {
  min-height: 90px;
  resize: vertical;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #42b983;
}

button {
  background: #42b983;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s ease, transform 0.1s ease;
}

button:hover {
  background: #36966f;
}

button:active {
  transform: scale(0.97);
}

p {
  color: #c0392b;
  margin-bottom: 10px;
  font-size: 13px;
}
</style>
