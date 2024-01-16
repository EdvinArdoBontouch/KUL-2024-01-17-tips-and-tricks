<script setup lang="ts">
import { ref } from "vue";

const a = 9007199254740992n;
const b = a + 1n;
const isOpen = ref(false);
</script>

<template>
  <div class="container">
    <div>{{ `a: ${a}` }}</div>
    <div>{{ `b: ${isOpen ? b : "???"}` }}</div>
    <div>{{ `a === b: ${isOpen ? a === b : "???"}` }}</div>
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
