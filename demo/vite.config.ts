import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react-resume-kit',
        '@icons-pack/react-simple-icons',
        'lucide-react',
      ],
    },
  },
})
