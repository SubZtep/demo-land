<script lang="ts">
import type { PropType } from "vue"
import { defineComponent, h } from "vue"

export default defineComponent({
  props: {
    link: {
      type: Object as PropType<SocialLink>,
      required: true,
    },
  },
  setup({ link }) {
    return () =>
      h("a", {
        href: link.link,
        title: link.alt,
        innerHTML: link.icon,
        class: "tileLink",
        target: "_blank",
        rel: "noopener noreferrer",
      })
  },
})
</script>

<style lang="postcss">
a.tileLink {
  @apply block p-1;
  width: var(--edge, 100px);
  height: var(--edge, 100px);
  & > * {
    @apply block w-full h-full fill-dark-900;
  }
}
</style>
