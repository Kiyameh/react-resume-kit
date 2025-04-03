import {defineConfig} from 'tsup'

export default defineConfig({
  entry: ['package/index.ts'],
  format: ['esm', 'cjs'],
  loader: {
    '.css': 'local-css',
  },
  dts: true,
  outExtension({format}) {
    return format === 'esm' ? {js: '.mjs'} : {js: '.cjs'}
  },
  external: ['react', 'react-dom'],
  esbuildOptions(options) {
    options.loader = {
      ...options.loader,
      '.css': 'css',
    }
    return options
  },
})
