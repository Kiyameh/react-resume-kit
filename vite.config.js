import { resolve } from 'path';
import { defineConfig } from 'vite';
import pkg from './package.json' with {type: 'json'};
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    // Plugin to inject CSS into the library
    libInjectCss(),
    // Plugin to generate TypeScript declaration files 
    dts({ 
      tsconfigPath: './tsconfig.json', 
      exclude: ['demo','public','node_modules'],
      include: ['./src/**/*.d.ts', './src/**/*.tsx', './src/types/types.ts'],
    })
  ],
  build: {
    lib: {
      // Entry point for the library
      entry: resolve(__dirname, 'src/index.tsx'),
      // Name of the library
      name: 'index',
      // Output file name
      fileName: 'index',
    },
    rollupOptions: {
      // External dependencies that should not be bundled
      external: [...Object.keys(pkg.peerDependencies)],
      // Output configuration
      output: {
        // Global variable names for external dependencies
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'lucide-react': 'LucideReact',
          '@icons-pack/react-simple-icons': 'ReactSimpleIcons',
        },
      },     
    },
  },
})
