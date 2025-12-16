<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import Loader from '../components/Loader.vue'
import ErrorMessage from '../components/ErrorMessage.vue'
import CommentForm from '../components/CommentForm.vue'

const route = useRoute()

const post = ref(null)
const loading = ref(false)
const error = ref(null)
const comments = ref([])

onMounted(async () => {
  loading.value = true
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
    )
    post.value = await res.json()
  } catch {
    error.value = 'Failed to load post'
  } finally {
    loading.value = false
  }
})

function addComment(comment) {
  comments.value.unshift(comment)
}
</script>

<template>
  <div class="post-detail">
  <Loader v-if="loading" />

  <ErrorMessage v-else-if="error" :msg="error" />

  <div v-else-if="post" class="post-detail">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>

    <section class="comments">
      <CommentForm @submit-comment="addComment" />
      <h3>Comments</h3>

      <p v-if="!comments.length" class="empty">
        No comments yet.
      </p>

      <ul>
        <li v-for="(c, index) in comments" :key="index">
          <strong>{{ c.email }}</strong>
          <p>{{ c.comment }}</p>
        </li>
      </ul>

    </section>
  </div>
  </div>
</template>

<style scoped>
.post-detail {
  background: white;
  padding: 20px;
  border-radius: 12px;
  margin-top: 20px;
}

.comments {
  margin-top: 32px;
}

.comments ul {
  list-style: none;
  padding: 0;
}

.comments li {
  background: #f5f7fa;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 10px;
}

.comments strong {
  display: block;
  font-size: 13px;
  color: #555;
}

.empty {
  color: #777;
  margin-bottom: 12px;
}
</style>
