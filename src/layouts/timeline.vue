<template lang="pug">
div(:class="$style.scrollable")
  router-view
</template>

<style module>
:global #app {
  @apply light:bg-cool-gray-100 dark:bg-blue-gray-900;
}

.scrollable {
  max-width: 600px;

  @media (min-width: 1180px) {
    max-width: 1200px;
  }

  @apply h-screen overflow-y-scroll mx-auto w-full
    <lg:snap snap-block snap-mandatory snap-py-4
    scrollbar-thin dark:scrollbar-thumb-green-500 scrollbar-track-transparent mx-auto;
  box-shadow: 0.2rem 0 #15803d;
}
</style>
