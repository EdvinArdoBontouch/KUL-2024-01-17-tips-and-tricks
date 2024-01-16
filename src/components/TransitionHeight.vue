<script setup lang="ts">
const enter = (element: HTMLElement) => {
  const initialPosition = element.style.position;
  const initialVisibility = element.style.visibility;
  const initialWidth = element.style.width;
  const width = getComputedStyle(element).width;

  element.style.width = width;
  element.style.position = "absolute";
  element.style.visibility = "hidden";
  element.style.height = "auto";

  const height = getComputedStyle(element).height;

  element.style.position = initialPosition;
  element.style.visibility = initialVisibility;
  element.style.width = initialWidth;
  element.style.height = "0";

  // Force repaint to make sure the animation is triggered correctly
  getComputedStyle(element).height;

  // Trigger the animation.
  // Use requestAnimationFrame to make sure the browser has finished
  // painting after setting the height above
  requestAnimationFrame(() => {
    element.style.height = height;
  });
};

const afterEnter = (element: HTMLElement) => {
  element.style.height = "auto";
};

const leave = (element: HTMLElement) => {
  const height = getComputedStyle(element).height;

  element.style.height = height;

  // Force repaint to make sure the animation is triggered correctly
  getComputedStyle(element).height;

  // Trigger the animation.
  // Use requestAnimationFrame to make sure the browser has finished
  // painting after setting the height above
  requestAnimationFrame(() => {
    element.style.height = "0";
  });
};
</script>

<template>
  <Transition
    name="expand"
    @enter="(element) => enter(element as HTMLElement)"
    @after-enter="(element) => afterEnter(element as HTMLElement)"
    @leave="(element) => leave(element as HTMLElement)"
  >
    <slot />
  </Transition>
</template>

<style lang="scss" scoped>
.expand-enter-active,
.expand-leave-active {
  transition: height 0.5s ease-in-out;
  overflow: hidden;
}

.expand-enter,
.expand-leave-to {
  height: 0;
}
</style>
