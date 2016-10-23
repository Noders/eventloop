/*
  eslint
    no-var: 0,
    import/no-extraneous-dependencies: 0
*/

/**
 * WEBPACK DLL GENERATOR
 *
 * This profile is used to cache webpack's module
 * contexts for external library and framework type
 * dependencies which will usually not change often enough
 * to warrant building them from scratch every time we use
 * the webpack process.
 */

var join = require('path').join;
var resolve = require('path').resolve;
var defaults = require('lodash/defaultsDeep');
var webpack = require('webpack');
var dllPlugin = require('./vendors').dllPlugin;

const dllConfig = dllPlugin.defaults;

module.exports = {
  context: process.cwd(),
  entry: dllPlugin.entry().dllDelsDeps,
  devtool: 'eval',
  output: {
    path: dllConfig.path,
    filename: '[name].dll.js',
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      path: resolve( process.cwd(), dllConfig.path, 'eventloop-manifest.json'),
      name: '[name]',
      context: resolve(__dirname)
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        BABEL_ENV: JSON.stringify('development')
      }
    })
  ]
};
