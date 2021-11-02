<template lang="pug">
//-  container.snap.snap-block.snap-mandatory.overflow-auto.h-200.scrollbar.scrollbar-thumb-gray-900.scrollbar-track-gray-100
.container(:class="$style.scrollable")
  router-view
</template>

<style module>
:global #app {
  @apply dark:bg-blue-gray-900;
}

.scrollable {
  @apply h-screen overflow-y-scroll
    snap snap-block snap-proximity snap-py-4
    scrollbar-thin scrollbar-thumb-amber-300 dark:scrollbar-thumb-blood scrollbar-track-black;
  box-shadow: 1rem 0 1.5rem black;
}
</style>
