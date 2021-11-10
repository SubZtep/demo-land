<template lang="pug">
.flex.gap-6.flex-col(:class="'sm:flex-row'" v-once)
  ProfilePic.flex-shrink-0
  .prose.text-lg.font-serif.tracking-wide.self-center
    p Hello, My name is Andras and I am a developer. I live in London but not a stranger in Budapest either. Here I share some of my work, like to and would like to contribute in many places.
    p
      fa.mr-2(:icon="['fas', 'triangle-person-digging']" :class="['dark:text-yellow-100', 'light:text-yellow-800']")
      | This is a portfolio page of my non-professional projects. It’s an ongoing list, have to search entries everywhere, nonetheless lots of them are missing — #[em broken/soaked HDD, no version control. tedious…] —, but I’m always looking for new projects.
</template>
