<template lang="pug">
svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="220" height="256")
  defs
    filter#filter
      feGaussianBlur(stdDeviation="6")
    mask#mask
      ellipse(class="<sm:hidden" cx="50%" cy="40%" rx="45%" ry="55%" fill="white" filter="url(#filter)")
      ellipse(class="sm:hidden" cx="51%" cy="48%" rx="46%" ry="48%" fill="white" filter="url(#filter)")
  image(xlink:href="/sandras.jpg" width="256" height="256" mask="url(#mask)")
</template>
