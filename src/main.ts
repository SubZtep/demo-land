import { ViteSSG } from "vite-ssg"
import generatedRoutes from "virtual:generated-pages"
import { setupLayouts } from "virtual:generated-layouts"
import App from "./App.vue"
import "virtual:windi.css"
import "virtual:windi-devtools"
import "./styles/main.css"
// import "./styles/global.css"
// import "./styles/animations.css"

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(App, { routes }, ctx => {
  Object.values(import.meta.globEager("./modules/*.ts")).map(i => i.install?.(ctx))

  ctx.router.beforeEach((to, from) => {
    const { appClass } = to.meta
    if (appClass) {
      document.querySelector("#app")?.classList.add(appClass as string)
    }
  })

  ctx.router.afterEach((to, from) => {
    const { appClass } = from.meta
    if (appClass) {
      document.querySelector("#app")?.classList.remove(appClass as string)
    }
  })
})
