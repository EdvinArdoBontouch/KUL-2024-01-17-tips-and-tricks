<script setup lang="ts">
import { routes } from "./router";
</script>

<template>
  <div class="routes">
    <div v-for="route in routes">
      <RouterLink :to="route.path">{{ route.title }}</RouterLink>
    </div>
  </div>
  <RouterView />
</template>

<style scoped lang="scss">
.routes {
  display: flex;
  gap: 8px;

  :any-link {
    color: white;
  }
}
</style>
