<template lang="pug">
.flex.gap-6.flex-col(:class="'sm:flex-row'" v-once)
  ProfilePic.flex-shrink-0
  .prose.text-lg.font-serif.tracking-wide.self-center
    p Hello, My name is Andras and I am a developer. I live in London but not a stranger in Budapest either. I share some of my work online, like to and would like to contribute in many places.
    p
      fa.mr-2(:icon="['fas', 'triangle-person-digging']" :class="['dark:text-yellow-100', 'light:text-yellow-800']")
      | This is a portfolio page of my pet projects. It’s an ongoing search job to me, lots of them are missing — #[em before version control, broken HDDs…] — #[s.text-gray or NDA], but I’m always looking for new projects.
</template>
