import { ViteSSG } from "vite-ssg"
// import { createHead } from "@vueuse/head"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
// @ts-ignore
import generatedRoutes from "virtual:generated-pages"
// @ts-ignore
import { setupLayouts } from "virtual:generated-layouts"
import App from "./App.vue"
import "./icons"
import "virtual:windi.css"
import "virtual:windi-devtools"
import "./styles/main.css"

const routes = setupLayouts(generatedRoutes)
routes.push({
  // path: "/^\/(?!blog\b|i\b).*$/",
  path: "/:pathMatch(.*)/",
  redirect: "/i/",
})

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior(to, _from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else if (to.hash) {
        return {
          el: to.hash,
          behavior: "smooth",
        }
      } else {
        return {
          top: 0,
          left: 0,
        }
      }
    },
  },
  // ctx => {
  ({ app, router }) => {
    // Object.values(import.meta.globEager("./modules/*.ts")).map(i => i.install?.(ctx))
    // const { app, router } = ctx

    // app.use(createHead())
    app.component("fa", FontAwesomeIcon)

    router.beforeEach(to => {
      const { appClass } = to.meta
      if (appClass) {
        document.querySelector("#app")?.classList.add(appClass as string)
      }
    })

    router.afterEach((_to, from) => {
      const { appClass } = from.meta
      if (appClass) {
        document.querySelector("#app")?.classList.remove(appClass as string)
      }
    })
  }
)
