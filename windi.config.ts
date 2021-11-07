import { defineConfig, } from "vite-plugin-windicss"
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
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: "",
            },
            "code::after": {
              content: "",
            },
            h2: {
              marginBottom: "1rem",
            },
            p: {
              marginTop: "0.75rem",
              marginBottom: "0.75rem",
            }
          },
        },
      },
    },
  },
  shortcuts: {
    "bg-gray": "dark:bg-blue-gray-800 light:bg-blue-gray-200",
    "border-gray": "border dark:border-gray-800 light:border-gray-200 transform-gpu hover:translate-y-1",
    "border-grayer": "border dark:border-gray-700 light:border-gray-300 transform-gpu hover:-translate-y-1",
    "text-grayed": "dark:text-blue-gray-500 light:text-blue-gray-700",
    "text-gray": "dark:text-blue-gray-400 light:text-blue-gray-800",
    "text-grayer": "dark:text-blue-gray-300 light:text-blue-gray-900",
    "item-list": "flex flex-wrap gap-1",
  },
  plugins: [
    typography({
      dark: true,
    }),
    scrollsnap,
    scrollbar,
    plugin(({ addBase, addUtilities, addComponents, theme }) => {
      addBase({
        hr: { opacity: theme("opacity.20") as string },
        p: { textAlign: "justify", hyphens: "auto" },
      })
      addUtilities({
        ".text-outline": {
          textShadow: `
            -1px -1px 0 #000,
            0   -1px 0 #000,
            1px -1px 0 #000,
            1px  0   0 #000,
            1px  1px 0 #000,
            0    1px 0 #000,
            -1px  1px 0 #000,
            -1px  0   0 #000`,
        },
        ".text-outline-2": {
          textShadow: `
            -2px -2px 0 #000,
            0   -2px 0 #000,
            2px -2px 0 #000,
            2px  0   0 #000,
            2px  2px 0 #000,
            0    2px 0 #000,
            -2px  2px 0 #000,
            -2px  0   0 #000`,
        },
      })
      addComponents({
        ".btn": {
          borderWidth: "2px",
          borderStyle: "outset",
          width: "2.25rem",
          height: "2.25rem",
          lineHeight: "2.1rem",
          textAlign: "center",
          borderRadius: "50%",
          // @ts-ignore
          "@media (prefers-color-scheme:dark)": {
            color: theme("colors.blue-gray.400"),
            borderColor: theme("colors.blue-gray.700"),
            backgroundColor: theme("colors.blue-gray.800"),
            "&:hover": {
              borderColor: theme("colors.blue-gray.500"),
            },
          },
          // @ts-ignore
          "@media (prefers-color-scheme:light)": {
            color: theme("colors.blue-gray.800"),
            borderColor: theme("colors.blue-gray.200"),
            backgroundColor: theme("colors.blue-gray.200"),
            "&:hover": {
              borderColor: theme("colors.blue-gray.300"),
            },
          },
          "&:focus:hover": {
            borderStyle: "inset",
            transform: "translate(1px, 1px)",
          },
          transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
        },
      })
    }),
  ],
})
