import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolveComponent } from 'vue'

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: {
  //     "@": resolve(__dirname, "src"),
  //   }
  // },
  plugins: [vue()],
  base:"/",
  server: {
    host: '0.0.0.0',
    port: 8991,
    https: false,
    proxy: {
      '/api': {
        target: 'http://xxxx:4000',
        // target:'https://second-hand-market.com',
        secure: false,
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  
})