<template>
  <div class="buttons">
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
    flex-direction: column-reverse;
  }
}
</style>
