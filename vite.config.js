import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(() => {

  const repoName = process.env.VITE_REPO_NAME || 'Starbucks'
  
  return {
    plugins: [react()],
    // Usa el nombre del repositorio desde la variable de entorno
    base: `/${repoName}/`,
  }
})
