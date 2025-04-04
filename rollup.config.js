import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
      name: 'react-lib',
      compact: true,
      exports: 'named',
    },
    {
      file: 'dist/index.ems.js',
      format: 'esm',
      sourcemap: true,
      compact: true,
      exports: 'named',
    },
  ],
  external: [
    'react',
    'react-dom',
    '@icons-pack/react-simple-icons',
    'lucide-react',
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    postcss({
      minimize: true,
    }),
    terser({
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      output: {
        comments: false,
      },
    }),
  ],
}
