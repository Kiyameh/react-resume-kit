import { resolve } from 'path';
import { defineConfig } from 'vite';
import pkg from './package.json' with {type: 'json'};
import { libInjectCss } from 'vite-plugin-lib-inject-css';


export default defineConfig({
  plugins: [
    libInjectCss(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.jsx'),
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies)],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'lucide-react': 'lucideReact',
          '@icons-pack/react-simple-icons': 'SimpleIcons',
        },
      },
     
    },
  },
})
