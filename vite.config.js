import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const repoName = process.env.VITE_REPO_NAME || 'Starbucks'
  
  return {
    plugins: [react()],
    base: command === 'build' ? `/${repoName}/` : '/',
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true
    }
  }
})