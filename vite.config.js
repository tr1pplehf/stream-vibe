import { defineConfig, pluginSsg } from "minista"
import path from 'path'

export default defineConfig({
  plugins: [pluginSsg()],
  resolve: {
    alias: [{
      find: '@/',
      replacement: path.resolve('src') + '/'
    }],
  }
})
