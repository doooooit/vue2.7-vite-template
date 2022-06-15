import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import ScriptSetup from 'unplugin-vue2-script-setup/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    createVuePlugin(/* options */),
    ScriptSetup(),
  ],
  resolve: {
    alias: {
      '~': `${path.resolve(__dirname, 'src')}`,
      '~c': `${path.resolve(__dirname, 'src/components')}`,
    }
  }
})
