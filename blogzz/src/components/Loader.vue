<template>
<div class="loader">Loading...</div>
</template>


<style scoped>
.loader {
  text-align: center;
  margin: 40px 0;
  font-size: 18px;
  color: #555;
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% { opacity: 0.4 }
  50% { opacity: 1 }
  100% { opacity: 0.4 }
}
</style>