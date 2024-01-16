<script setup lang="ts">
import { ref } from "vue";

const date = ref(new Date("2024-01-17T12:00:00.000Z"));
const nextDate = ref<Date | undefined>();

const setNextDate = () => {
  nextDate.value = new Date(
    new Date(date.value).setDate(date.value.getDate() + 1)
  );
};
</script>

<template>
  <div class="container">
    <span>{{ `date: ${date.toISOString()}` }}</span>
    <span>{{ `nextDate: ${nextDate?.toISOString()}` }}</span>
  </div>
  <button @click="setNextDate">Set nextDate</button>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  color: white;
  text-align: center;
}
</style>
