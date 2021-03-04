import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import analtics from "analtics/plugins/vite"

export default defineConfig({
  plugins: [
    // @ts-ignore
    analtics({
      tracker: "https://analtics.netlify.app/.netlify/functions/tracker",
      account: "291435445219230209",
      productionOnly: true
    }),
    vue(),
  ],
})
