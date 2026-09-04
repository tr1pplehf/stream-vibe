import { defineConfig, pluginBundle, pluginSsg } from "minista"
import path from 'path'

export default defineConfig({
  plugins: [
    pluginSsg({
      layout: "/src/layouts/global.{tsx,jsx}",
    }),
    pluginBundle({
      src: ["/src/styles/index.{tsx,jsx,js}", "/src/pages/**/*.{tsx,jsx,mdx}"],
      outName: "bundle",
      useExportCss: true,
    })],
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
