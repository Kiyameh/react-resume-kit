import {defineConfig} from 'tsup'

export default defineConfig({
  entry: ['package/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  external: [
    'react',
    'react-dom',
    'lucide-react',
    '@icons-pack/react-simple-icons',
  ],
})
