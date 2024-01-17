<!-- Inspired by: https://lea.verou.me/blog/2012/04/background-attachment-local/ -->

<template>
  <div class="scroll-container">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate
    semper aliquet. Nulla a turpis tempor, ornare nibh at, viverra augue.
    Maecenas sagittis lobortis orci eget feugiat. Pellentesque ut gravida nunc,
    vitae rhoncus diam. Vestibulum mattis ante in elementum iaculis. Nunc
    luctus, odio non scelerisque eleifend, nibh dui eleifend nunc, non pulvinar
    ex quam et leo. Suspendisse potenti. Phasellus sodales, justo fringilla
    malesuada consectetur, augue risus luctus turpis, a dictum urna justo at
    metus. Quisque eu augue sem. In pulvinar at nunc ac iaculis. Morbi gravida
    condimentum arcu, vel condimentum urna rutrum id. Proin quis iaculis lacus.
    Maecenas bibendum, dolor in iaculis consectetur, sapien mi tincidunt nisi,
    at finibus magna metus eget sem. Cras efficitur pretium commodo. Nam elit
    ligula, rutrum sit amet lorem eget, commodo vehicula tortor. Proin a feugiat
    purus.
  </div>
</template>

<style scoped lang="scss">
.scroll-container {
  overflow: auto;
  width: 200px;
  max-height: 200px;

  background: local
      linear-gradient(to bottom, white 0, white 20px, transparent 100px),
    local linear-gradient(to top, white 0, white 20px, transparent 100px),
    scroll linear-gradient(to bottom, rgba(black, 0.5) 0, transparent 20px),
    scroll linear-gradient(to top, rgba(black, 0.5) 0, transparent 20px);

  background-color: white;
}
</style>
