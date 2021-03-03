import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import analytics from "./vite-analytics"

export default defineConfig({
  plugins: [
    // analytics({
    //   tracker: "https://analtics.netlify.app/.netlify/functions/tracker",
    //   account: "291435445219230209",
    //   productionOnly: true
    // }),
    vue(),
  ],
})
