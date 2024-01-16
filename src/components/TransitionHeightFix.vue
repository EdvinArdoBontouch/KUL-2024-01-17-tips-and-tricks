<script setup lang="ts">
import { ref } from "vue";
import TransitionHeight from "./TransitionHeight.vue";

const isOpen = ref(true);
</script>

<template>
  <button @click="isOpen = !isOpen">{{ isOpen ? "Close" : "Open" }}</button>
  <TransitionHeight>
    <div v-if="isOpen" class="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
      sollicitudin leo eu tempus tempus. Aliquam sit amet dignissim ipsum.
      Aliquam in tempor arcu. Vestibulum eu eros euismod diam fermentum mattis
      eu nec mi. Praesent vitae consequat risus, quis sodales tortor. Quisque in
      interdum ante, sit amet ultricies dolor. Pellentesque eu arcu porta,
      tempor massa quis, accumsan metus. Sed erat mi, malesuada non nisi quis,
      pharetra mattis arcu. Nunc nec scelerisque nulla. Quisque ornare sit amet
      neque eu tempus. Suspendisse ultricies, turpis id consectetur pretium,
      neque diam porta purus, hendrerit rhoncus urna ante sit amet risus.
      Curabitur metus enim, accumsan id nisl sit amet, accumsan molestie eros.
      Suspendisse lectus dui, consectetur in quam id, lobortis feugiat sapien.
      Sed a tortor lorem. Pellentesque sed neque eget justo interdum condimentum
      id vel magna. Morbi vitae augue libero. Fusce et nisl sagittis, convallis
      nisl at, ornare dui. Sed ut gravida nibh. Aenean a metus mauris. Phasellus
      finibus est a felis semper euismod. Donec molestie auctor sem a porta. Ut
      lacinia accumsan mi ut venenatis. Phasellus mi nibh, imperdiet vel
      molestie id, dapibus sed massa. Morbi id mi eros. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Donec lobortis mattis cursus. Vivamus
      eget quam sapien. Duis ut vulputate urna. Integer in diam vitae dui porta
      lobortis in a ipsum. Praesent accumsan diam eget urna faucibus, ac
      faucibus lacus viverra. Cras at mollis nisl. Pellentesque sed consequat
      leo, molestie hendrerit lacus. Praesent posuere lacus a risus aliquam, sit
      amet congue quam mollis. Praesent nec neque quis metus porta sagittis. Sed
      tincidunt in risus non tristique. Aliquam blandit tristique euismod. Cras
      nec pellentesque elit.
    </div>
  </TransitionHeight>
</template>

<style scoped lang="scss">
.text {
  color: white;
}
</style>
