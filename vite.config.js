import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [react(), federation({
    name: "cow-front",
    filename: "cow-front-entry.js",
    shared: ["react", "react-dom", "react-router-dom"],
    remotes: {
      "user-front": "http://localhost:8082/assets/cow-component-front-entry.js"
    },
  })],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    host: true,
    port: 3000, // This is the port which we will use in docker
    // Thanks @sergiomoura for the window fix
    // add the next lines if you're using windows and hot reload doesn't work
    watch: {
      usePolling: true
    }
  },
})
