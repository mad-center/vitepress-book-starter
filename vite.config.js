import {defineConfig} from 'vite'

export default defineConfig({
  optimizeDeps: {
    include: [
      // 'vue-clipboard3'
    ],
    exclude: [
    ]
  }
})