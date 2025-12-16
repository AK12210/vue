<script setup>
import { ref } from 'vue'


const message = ref('Admin Area')
</script>


<template>
  <div class="page">
    <h2>Admin Panel</h2>

    <nav class="admin-nav">
      <router-link to="/admin/stats">Stats</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style scoped>
.admin-nav {
  margin: 16px 0;
}

.admin-nav a {
  margin-right: 12px;
  font-weight: 500;
}
</style>
