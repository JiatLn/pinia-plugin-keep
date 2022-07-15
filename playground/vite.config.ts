import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      'pinia-plugin-keep': path.resolve(__dirname, '../src/index.ts'),
    },
  },
  plugins: [
    Vue({
      reactivityTransform: true,
    }),
  ],
})
