import { defineConfig } from "vite-plugin-windicss"
import typography from "windicss/plugin/typography"
import scrollsnap from "windicss/plugin/scroll-snap"
import scrollbar from "@windicss/plugin-scrollbar"
import plugin from "windicss/plugin"

export default defineConfig({
  darkMode: "media",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        lg: "1024px",
      },
    },
    extend: {
      colors: {
        blood: "#8a0303",
      },
    },
  },
  shortcuts: {
    "border-gray": "border dark:border-gray-700 light:border-gray-300",
    "text-gray": "dark:text-blue-gray-400 light:text-blue-gray-800",
  },
  plugins: [
    typography({
      dark: true,
    }),
    scrollsnap,
    scrollbar,
    plugin(({ addBase, addComponents, theme }) => {
      addBase({
        hr: { opacity: theme("opacity.20") as string, margin: `${theme("spacing.8")} 0 !important` },
      })
      addComponents({
        // .flex.items-center.gap-2.rounder.p-2.bg-blue-gray-800.text-blue-gray-400(:class="['light:bg-blue-gray-200', 'light:text-blue-gray-800']")
        // .flex.items-center.gap-2.rounded.px-2.py-1.text-blue-gray-400(:class="'light:text-blue-gray-800'")
        // ".pin": {
        //   display: "flex",
        //   alignItems: "center",
        //   gap: "2rem",
        //   borderRadius: theme("radius") as string,
        // },
      })
    }),
  ],
})
