import { defineConfig } from 'vite'

export default defineConfig({
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html',
        webapps: 'web-apps.html',
        mlprojects: 'ml-projects.html',
        github: 'github-repos.html'
      }
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0', // すべてのネットワークインターフェースでリッスン
    open: true
  }
})