import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    minify: false,
    emptyOutDir: true,
  },
  resolve: {
    // the plugin folder has its own @capacitor/core, use only the app one
    dedupe: ['@capacitor/core'],
  },
});
