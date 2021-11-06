<template lang="pug">
a.tileLink(:href="props.link.link" :title="props.link.alt" ref="noopener" target="_blank")
  fa(:icon="['fab', props.link.icon]")
</template>

<script lang="ts" setup>
const props = defineProps<{ link: SocialLink }>()
</script>
