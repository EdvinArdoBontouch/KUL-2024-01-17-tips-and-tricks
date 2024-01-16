<script setup lang="ts">
import { ref } from "vue";

const a = 9007199254740992n; // == Number.MAX_SAFE_INTEGER + 1 == 2^53
const b = a + 1n;
const isOpen = ref(false);
</script>

<template>
  <div class="container">
    <div>{{ `a: ${a}` }}</div>
    <div>{{ `b: ${isOpen ? b : "???"}` }}</div>
    <div>{{ `b - a: ${isOpen ? b - a : "???"}` }}</div>
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
