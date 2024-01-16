<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
import { routes } from "./router";

const currRoute = useRoute();

const rootPath = computed(() => `/${currRoute.fullPath.split("/")[1]}`);

const subRoutes = computed(
  () => routes.find((route) => route.path === rootPath.value)?.children
);
</script>

<template>
  <div class="routes">
    <div v-for="route in routes">
      <RouterLink :to="route.path">{{ route.name }}</RouterLink>
    </div>
  </div>
  <div class="routes">
    <div v-for="subRoute in subRoutes">
      <RouterLink :to="`${rootPath}/${subRoute.path}`">
        {{ subRoute.name }}
      </RouterLink>
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
