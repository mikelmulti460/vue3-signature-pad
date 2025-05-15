import { defineConfig } from 'tsup'
import vuePlugin from 'unplugin-vue/esbuild'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: false,
  minify: true,
  esbuildPlugins: [
    vuePlugin({
      isProduction: true,
    }),
  ],
})
