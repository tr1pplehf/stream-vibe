import {
  defineConfig,
  pluginBundle,
  pluginImage,
  pluginSsg,
  pluginSvg
} from "minista"
import path from 'path'

export default defineConfig({
  plugins: [
    pluginSsg({
      layout: "/src/layouts/global.{tsx,jsx}",
    }),
    pluginBundle({
      src: ["/src/layouts/global.{tsx,jsx}", "/src/pages/**/*.{tsx,jsx,mdx}"],
      outName: "bundle",
      useExportCss: true,
    }),
    pluginImage(),
    pluginSvg(),
  ],
  resolve: {
    alias: [{
      find: '@/',
      replacement: path.resolve('src') + '/'
    }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '@/styles/helpers' as *;
        `
      }
    }
  }
})
