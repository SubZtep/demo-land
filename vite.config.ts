import path from "path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Prism from "markdown-it-prism"
import Pages from "vite-plugin-pages"
import Markdown from "vite-plugin-md"
import WindiCSS from "vite-plugin-windicss"
import Layouts from "vite-plugin-vue-layouts"
import VueI18n from "@intlify/vite-plugin-vue-i18n"
import ViteComponents from "vite-plugin-components"

export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },

  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),

    Pages({
      extensions: ["vue", "md"],
    }),

    Layouts({
      layoutsDir: "src/layouts",
    }),

    Markdown({
      wrapperClasses: "prose prose-sm m-auto text-left",
      headEnabled: true,
      markdownItSetup(md) {
        md.use(Prism)
      },
    }),

    ViteComponents({
      extensions: ["vue", "md"],
      customLoaderMatcher: id => id.endsWith(".md"),
    }),

    WindiCSS({
      safelist: "prose prose-sm m-auto text-left",
    }),

    VueI18n({
      include: [path.resolve(__dirname, "locales/**")],
    }),
  ],

  ssgOptions: {
    script: "async",
    formatting: "minify",
  },

  optimizeDeps: {
    include: ["vue", "vue-router", "@vueuse/core"],
    exclude: ["vue-demi"],
  },

  server: {
    https: true,
    host: "192.168.0.10"
  }
})
