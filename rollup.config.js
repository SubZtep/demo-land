import pug from "pug"
import { join } from "path"
import babel from "@rollup/plugin-babel"
import strip from "@rollup/plugin-strip"
import replace from "@rollup/plugin-replace"
import { terser } from "rollup-plugin-terser"
import commonjs from "@rollup/plugin-commonjs"
import html from "@open-wc/rollup-plugin-html"
import { nodeResolve } from "@rollup/plugin-node-resolve"

const isProd = process.env.NODE_ENV === "production"
const extensions = [`.js`, `.ts`]

const pluginList = chunk => {
  const plugins = [
    nodeResolve({ extensions, preferBuiltins: true }),
    babel({ extensions, babelHelpers: `bundled` }),
    commonjs(),
  ]

  const pugs = [chunk, `404`]
  pugs.forEach(file => void plugins.push(
    html({
      name: `${file}.html`,
      inject: false,
      template: ({ bundle }) =>
        pug
          .compileFile(`pages/${file}.pug`, { pretty: !isProd })()
          .replace(
            "<!-- bundle-->",
            bundle.entrypoints.map(({ importPath }) => `<script src="${importPath}"></script>`)
          ),
      minify: isProd,
    }),
  ))

  if (isProd) {
    plugins.unshift(replace({ "//prod:": ``, delimiters: [``, ``] }))
    plugins.push(strip({ include: [`src/**/*.(t|j)s`], sourceMap: false }), terser())
  }

  return plugins
}

export default [`index`].map(chunk => ({
  input: join(__dirname, `./dist/${chunk}.ts`),
  output: { dir: `dist` },
  plugins: pluginList(chunk)
}))
