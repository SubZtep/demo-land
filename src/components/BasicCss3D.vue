<template lang="pug">
.plane
  .little {{ little }}
</template>

<script setup>
ref: little = 1// const little = ref()
</script>

<style scoped>
.plane {
  background-color: #333;
  width: 250px;
  height: 250px;
  box-shadow: 20px -32px 13px #000c inset;
  /* justify-items: ; */
  /* align-items: center; */
  display: grid;
  align-items: center;
  justify-content: center;
  position: 10;
}
.little {
  background-color: var(--red);
  width: 50px;
  height: 50px;
  border: 8px solid #050;
  box-shadow: 6px -6px 6px #0d0a;
}
</style>
