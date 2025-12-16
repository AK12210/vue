<script setup>
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'

onMounted(() => console.log('App mounted'))
</script>

<template>
  <NavBar />

  <main class="app-layout">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<style>
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: #f5f7fa;
}

.app-layout {
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
