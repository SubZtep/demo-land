<template lang="pug">
svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="256" height="256")
  defs
    filter#filter
      feGaussianBlur(stdDeviation="32")
    mask#mask
      ellipse(cx="55%" cy="40%" rx="45%" ry="55%" fill="white" filter="url(#filter)")
  image(xlink:href="/sandras.jpg" width="256" height="256" mask="url(#mask)")
</template>
