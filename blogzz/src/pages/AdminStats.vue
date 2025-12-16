<script setup>
import { computed, onMounted } from 'vue'
import { usePostsStore } from '../store/posts'

const postsStore = usePostsStore()

onMounted(() => {
  if (!postsStore.posts.length) {
    postsStore.fetchPosts()
  }
})

const totalPosts = computed(() => postsStore.posts.length)

const longPosts = computed(() =>
  postsStore.posts.filter(p => p.body && p.body.length > 150)
)

const shortPosts = computed(() =>
  postsStore.posts.filter(p => p.body && p.body.length <= 150)
)
</script>

<template>
  <section class="stats">
    <h3>Blogzz statistics</h3>

    <div class="cards">
      <div class="card">
        <span>Total Posts</span>
        <strong>{{ totalPosts }}</strong>
      </div>

      <div class="card">
        <span>Long Posts</span>
        <strong>{{ longPosts.length }}</strong>
      </div>

      <div class="card">
        <span>Short Posts</span>
        <strong>{{ shortPosts.length }}</strong>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats {
  margin-top: 24px;
}

.cards {
  display: flex;
  gap: 24px;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  width: 160px;
  text-align: center;
  box-shadow: 0 6px 14px rgba(0,0,0,0.1);
}

.card span {
  font-size: 14px;
  color: #6b7280;
}

.card strong {
  font-size: 28px;
  color: #111827;
}
</style>
