<script setup>
import { onMounted, watch } from 'vue'
import { useFetch } from '../composables/useFetch'
import { usePostsStore } from '../store/posts'

import Loader from '../components/Loader.vue'
import ErrorMessage from '../components/ErrorMessage.vue'
import PostList from '../components/PostList.vue'

const store = usePostsStore()

const { data, loading, error, fetchData } =
  useFetch('https://jsonplaceholder.typicode.com/posts')

onMounted(fetchData)

watch(data, (val) => {
  if (val) store.setPosts(val)
})
</script>

<template>
  <div class="posts-page">
    <h2>Posts</h2>
    <Loader v-if="loading" />
    <ErrorMessage v-else-if="error" :msg="error" />
    <PostList v-else :posts="store.posts" />
  </div>
</template>

