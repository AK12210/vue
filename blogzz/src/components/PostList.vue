<script setup>
import PostItem from './PostItem.vue'

defineProps({
  posts: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div>
    <PostItem
      v-for="post in posts"
      :key="post.id"
      v-bind:post="post"
    />
  </div>
</template>
