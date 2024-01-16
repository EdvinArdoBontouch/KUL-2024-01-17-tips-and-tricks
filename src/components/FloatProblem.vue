<script setup lang="ts">
import { ref } from "vue";

const a = ref(0.1);
const b = ref(0.2);
const isOpen = ref(false);
</script>

<template>
  <div class="container">
    <div>{{ `a: ${a}` }}</div>
    <div>{{ `b: ${b}` }}</div>
    <div>{{ `a + b: ${isOpen ? a + b : "???"}` }}</div>
    <button v-if="!isOpen" @click="isOpen = true">Reveal</button>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  color: white;
  text-align: center;
}
</style>
