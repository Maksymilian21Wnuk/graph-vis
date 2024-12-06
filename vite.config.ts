import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer'



export default defineConfig({
  base: "/GraphVisual/",
  plugins: [
    react(),
    visualizer()],
  server: {
    host: true,
    port: 3000,
    watch: {
      usePolling: true,
    }
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {

    }
  }
})
