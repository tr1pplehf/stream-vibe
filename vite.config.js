import {
  defineConfig,
  pluginBundle,
  pluginImage,
  pluginSprite,
  pluginSsg
} from "minista"
import path from 'path'

export default defineConfig({
  base: '/animevibe/',
  plugins: [
    pluginSsg({
      layout: "/src/layouts/global.{tsx,jsx}",
    }),
    pluginBundle({
      src: ["/src/layouts/global.{tsx,jsx}", "/src/pages/**/*.{tsx,jsx,mdx}"],
      outName: "bundle",
      useExportCss: true,
    }),
    pluginImage({
      useCache: true,
      optimize: {
        outName: "[name]-[width]x[height]",
        remoteName: "remote-[index]",
        layout: "constrained",
        breakpoints: [320, 400, 640, 800, 1024, 1280, 1440, 1920, 2560, 2880, 3840],
        resolutions: [1, 2],
        aspect: undefined,
        format: "webp",
        quality: undefined,
        fit: "cover",
        position: "centre",
        background: undefined,
      },
      decoding: "async",
      loading: "lazy",
    }),
    pluginSprite({
      config: {
        plugins: [
          {
            name: 'removeAttrs',
            params: {
              attrs: ['fill', 'stroke']
            }
          }
        ]
      }
    }),
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
  },
})
