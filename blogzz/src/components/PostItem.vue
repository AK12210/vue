<script setup>
import { ref } from 'vue'

defineProps({
  post: Object
})

const isActive = ref(false)
</script>

<template>
  <router-link
    :to="`/posts/${post.id}`"
    class="post-link"
    :class="{ active: isActive }"
    @click="isActive = true"
  >
    {{ post.title }}
  </router-link>
</template>

<style scoped>
.post-link {
   display: block;
  padding: 16px;
  background: white;
  border-radius: 10px;
  margin-bottom: 12px;
  text-decoration: none;
  color: black;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.post-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.08);
}

.active {
  font-weight: bold;
  color: teal;
}
</style>
