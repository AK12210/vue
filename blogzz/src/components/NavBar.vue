<script setup>
import { useAuthStore } from '../store/auth'
const auth = useAuthStore()
</script>
<template>
  <header class="nav-wrapper">
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/posts">Posts</router-link>
      <router-link to="/admin">Admin</router-link>
      <button v-if="!auth.isAuthenticated" @click="auth.loginAsAdmin">
        Initiate admin access
      </button>
    </nav>
  </header>
</template>



<style scoped>
.nav-wrapper {
  width: 100%;
  background: #1f2933;
}

.nav {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 16px 0;
}

.nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 14px;
  border-radius: 8px;
  transition: background 0.2s ease;
}

.nav a:hover {
  background: rgba(255, 255, 255, 0.15);
}

button {
  width: 50px;
  border: none;
    height: 45px;
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
  background: #1f2933;
}

.router-link-active {
  background: rgba(255, 255, 255, 0.25);
}
</style>