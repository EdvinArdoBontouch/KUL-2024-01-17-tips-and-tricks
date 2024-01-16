<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";

const isLargeScreen = useMediaQuery("(min-width: 768px)");
</script>

<template>
  <div v-reverse="isLargeScreen" class="buttons">
    <button>Secondary</button>
    <button>Primary</button>
  </div>
</template>

<style scoped lang="scss">
.buttons {
  display: flex;
  flex-direction: row;
  gap: 4px;

  @media (min-width: 768px) {
    flex-direction: column;
  }
}
</style>
