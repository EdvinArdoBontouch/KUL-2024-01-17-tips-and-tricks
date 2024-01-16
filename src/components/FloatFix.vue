<script setup lang="ts">
import { ref } from "vue";
import { Money } from "../utils/money";

const a = ref(Money.fromParts(0, 10));
const b = ref(Money.fromParts(0, 20));
const isOpen = ref(false);
</script>

<template>
  <div class="container">
    <div>{{ `a: ${a.toString()}` }}</div>
    <div>{{ `b: ${b.toString()}` }}</div>
    <div>{{ `a + b: ${isOpen ? a.add(b).toString() : "???"}` }}</div>
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
