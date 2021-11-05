import { ViteSSG } from "vite-ssg"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import generatedRoutes from "virtual:generated-pages"
import { setupLayouts } from "virtual:generated-layouts"
import App from "./App.vue"
import "virtual:windi.css"
import "virtual:windi-devtools"
import "./icons"
import "./styles/main.css"

const routes = setupLayouts(generatedRoutes)

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
  ({ app, router }) => {
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
