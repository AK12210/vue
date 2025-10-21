<template>
  <div class="video-card">
    <img :src="thumbnail" :alt="title" class="thumbnail" />
    <h3>{{ title }}</h3>
    <p class="channel">{{ channel }}</p>
    <p class="views">{{ views }} views</p>
    <button @click="$emit('liked')">Like</button>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  channel: String,
  views: Number,
  thumbnail: String,
});
</script>


<style scoped>
.video-card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 12px;
  background-color: #fff;
}
.channel {
  color: grey;
}
button {
  margin-top: 8px;
  background-color: #ff0000;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background-color: #cc0000;
}
</style>
