<template>
  <main class="scroll-container" :class="{ mqX2l }" bg="neutral-5">
    <RouterView />
  </main>
</template>

<style lang="scss">
.scroll-container.mqX2l {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;

  & > div {
    scroll-snap-align: center;
  }
}
</style>
