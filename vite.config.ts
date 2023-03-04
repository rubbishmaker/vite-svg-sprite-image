import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path = require('path')

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': './'
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      name: 'vite-svg-sprite-image',
      fileName: (format) => `svg-sprite.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
      }
    }
  }
})
