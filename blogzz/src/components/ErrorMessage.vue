<script setup>
defineProps({ msg: String })
</script>


<template>
<p class="error">{{ msg }}</p>
</template>

<style scoped>
.error {
  background: #ffe6e6;
  color: red;
  padding: 10px;
  border-radius: 8px;
  margin: 16px 0;
}
</style>
