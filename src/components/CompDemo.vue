<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button class="button" @click="count++">{{ count }}</button>
</template>

<style scoped>
.button {
  border: none;
  font-size: 16px;
  width: 6em;
  padding: 0.5em;
}
</style>
