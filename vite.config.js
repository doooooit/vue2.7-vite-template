import { defineConfig } from 'vite'
import VuePlugin from '@vitejs/plugin-vue2'
import path from 'path'

export default defineConfig({
  plugins: [
    VuePlugin(),
  ],
  resolve: {
    alias: {
      '~': `${path.resolve(__dirname, 'src')}`,
      '~c': `${path.resolve(__dirname, 'src/components')}`,
    }
  }
})
