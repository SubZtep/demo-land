<template lang="pug">
router-view
</template>

<style>
html {
  /* height: 100vh; */
}

body {
  /* height: 100vh; */
  /* overflow: hidden; */
  background-color: #000400;
}

/* #app {
  overflow: hidden;
} */

#app.sunny {
  background: linear-gradient(0, #8a0303 0%, #fdbb2d 25%, #22c1c3 100%);
}

.bounce-enter-active {
  animation: bounce-in 0.5s ease-out both;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse ease-in both;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.tileLink {
  @apply block p-1;
  width: var(--edge, 100px);
  height: var(--edge, 100px);
  & > * {
    @apply block w-full h-full fill-dark-900;
  }
}
</style>
