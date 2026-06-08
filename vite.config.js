import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        choice: resolve(__dirname, 'choice.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        guidedLogin: resolve(__dirname, 'guided-login.html'),
        personResult: resolve(__dirname, 'person-result.html'),
        personResultFamily: resolve(__dirname, 'person-result-family.html'),
        personResultFiles: resolve(__dirname, 'person-result-files.html'),
        personResultImages: resolve(__dirname, 'person-result-images.html'),
        personResultInfo: resolve(__dirname, 'person-result-info.html'),
        personResultSources: resolve(__dirname, 'person-result-sources.html'),
        personSearch: resolve(__dirname, 'person-search.html'),
      }
    }
  }
})
