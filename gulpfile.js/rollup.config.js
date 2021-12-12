'use strict'

import {terser} from "rollup-plugin-terser";

const banner = require('./banner.js')
const {paths} = require('./gulpfile.paths')

const rollupConfig = {
  input: [paths.src + 'offcanvas/index.umd.js'],
  output: [
    {
      banner,
      file: paths.dist + 'bootstrapOffcanvasJs.js',
      format: 'umd',
      generatedCode: 'es2015',
      sourcemap: true
    },
    {
      banner,
      file: paths.dist + 'bootstrapOffcanvasJs.min.js',
      format: 'umd',
      generatedCode: 'es2015',
      plugins: [terser()],
      sourcemap: true
    },
  ]
}


rollupConfig.output.forEach(currentOutput => {
  currentOutput.name = 'bootstrapOffcanvasJs'
})


module.exports = rollupConfig
