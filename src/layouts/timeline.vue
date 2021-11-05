<template lang="pug">
.container(:class="$style.scrollable")
  router-view
</template>

<style module>
:global #app {
  @apply dark:bg-blue-gray-900;
}

.scrollable {
  @apply h-screen overflow-y-scroll
    snap snap-block snap-mandatory snap-py-4
    scrollbar-thin scrollbar-thumb-amber-300 dark:scrollbar-thumb-blood scrollbar-track-black;
  box-shadow: 1rem 0 1.5rem black;
}
</style>
