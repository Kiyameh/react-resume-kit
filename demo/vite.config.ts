import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-resume-kit/',
  build: {
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        '@icons-pack/react-simple-icons',
        'lucide-react',
      ],
    },
  },
})
