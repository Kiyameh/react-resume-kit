import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import {resolve} from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/package/index.ts'),
      name: 'Resume',
      fileName: 'index',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'lucide-react',
        '@icons-pack/react-simple-icons',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'lucide-react': 'lucide-react',
          '@icons-pack/react-simple-icons': '@icons-pack/react-simple-icons',
        },
      },
    },
  },
})
