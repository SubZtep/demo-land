<template lang="pug">
hr.m-8.border-blue-500
h3 kkk {{useRouter().currentRoute.value.meta}}
router-view
hr.m-8.border-2.rounded
</template>

<script setup>
import { useRouter } from "vue-router"
</script>

<style scoped>
hr {
  box-shadow: 0 2px 3px #666;
}
hr:last-of-type {
  /* box-shadow: 0 -2px 1px #136; */
  /* border-image: linear-gradient(to bottom, #000 0%, #000 100%); */
  border-color: var(--red);
}
</style>
