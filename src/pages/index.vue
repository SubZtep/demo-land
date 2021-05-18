<template lang="pug">
.absolute.w-screen.h-screen.flex.justify-center.items-center.z-1
  MandelbrotSet
.videobg.absolute.top-0.right-0.bottom-0.left-0
</template>

<style>
.videobg {
  background: url("/a-4o4.gif") no-repeat left center;
  background-size: cover;
  filter: blur(4px) brightness(0.6) contrast(1.3) grayscale(0.6) sepia(1);
}
</style>
