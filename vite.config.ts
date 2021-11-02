import path from "path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Prism from "markdown-it-prism"
import Pages from "vite-plugin-pages"
import Markdown from "vite-plugin-md"
import WindiCSS from "vite-plugin-windicss"
import Layouts from "vite-plugin-vue-layouts"
// import VueI18n from "@intlify/vite-plugin-vue-i18n"
import Components from "unplugin-vue-components/vite"
import AutoImport from "unplugin-auto-import/vite"

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

    Components({
      dirs: ["src/components", "src/layouts/src/pages"],
      extensions: ["vue", "md", "ts"],
      dts: "src/types/components.d.ts",
      deep: true,
      // include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),

    AutoImport({
      include: [/\.[tj]s$/, /\.vue\??/],
      imports: [
        "vue",
        "@vueuse/core",
        { "@vueuse/core": ["get", "set", "and", "not", "invoke"] },
      ],
      dts: "src/types/auto-imports.d.ts",
    }),

    WindiCSS({
      // safelist: "prose prose-sm m-auto text-left",
    }),

    // VueI18n({
    //   include: [path.resolve(__dirname, "locales/**")],
    // }),
  ],

  // ssgOptions: {
  //   mode: "production",
  //   script: "async",
  //   formatting: "minify",
  //   dirStyle: "nested",
  // },

  // optimizeDeps: {
  //   include: ["vue", "vue-router", "@vueuse/core"],
  //   exclude: ["vue-demi"],
  // },

  // server: {
  //   https: true,
  //   host: "192.168.0.10"
  // }
})
