import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  root: './__tests__',
  server: {
    port: 8083, // 使用与react不同的端口
    open: '/',
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@antv/g6': path.resolve(__dirname, '../g6/src'),
      '@antv/g6-extension-vue': path.resolve(__dirname, './src'),
      'vue': path.resolve(__dirname, 'node_modules/vue/dist/vue.esm-bundler.js')
    },
  },
});