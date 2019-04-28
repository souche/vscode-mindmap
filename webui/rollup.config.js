import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';

module.exports = {
  input: './main.js',
  output: {
    file: './dist/main.min.js',
    format: 'esm',
    strict: false,
  },
  plugins: [
    uglify({
      mangle: false,
    }),
    babel(),
  ],
};
