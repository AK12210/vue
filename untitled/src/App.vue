<template>
  <div class="app">
    <h1>YouTube</h1>

    <input
      v-model="searchQuery"
      placeholder="Search"
      class="search-input"
    />

    <p v-if="loading">Loading videos...</p>

    <p v-else-if="filteredVideos.length === 0">No videos found</p>

    <div v-else class="video-list">
      <VideoCard
        v-for="video in filteredVideos"
        :key="video.id"
        :title="video.title"
        :channel="video.channel"
        :views="video.views"
        :thumbnail="video.thumbnail"
        @liked="addLike"
      />
    </div>

    <div class="footer">
      <p>Videos found: {{ filteredVideos.length }}</p>
      <p>Total likes: {{ totalLikes }}</p>
    </div>
  </div>
</template>

<script setup>
import { watch } from "vue";
import VideoCard from "./components/VideoCard.vue";
import useVideos from "./composables/useVideos.js";

const { loading, searchQuery, filteredVideos, totalLikes, addLike } =
  useVideos();

watch(searchQuery, (newVal) => {
  console.log("Search changed:", newVal);
});
</script>

<style scoped>
.app {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}
.search-input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
}
.video-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
}
.footer {
  margin-top: 20px;
  font-weight: bold;
}
</style>
