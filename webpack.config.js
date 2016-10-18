/* eslint
  no-var: 0,
  import/no-extraneous-dependencies: 0
*/

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var cssnext = require('postcss-cssnext');
var nested = require('postcss-nested');
var postcssAssets = require('postcss-assets');

// var colors = require('colors');

var postCSSConfig = () => {
  return [nested, cssnext(), postcssAssets()];
};
var babelQueryPresets = ['es2015', 'react'];

if (process.env.NODE_ENV !== 'production') {
  babelQueryPresets.push('react-hmre');
}

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      // filename: path.resolve(__dirname, 'src', 'build', 'index.html'),
      template: path.resolve(__dirname, 'src', 'template', 'index.hbs')
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: process.env.NODE_ENV === 'production',
      options: {
        context: path.join(__dirname, 'src'),
        output: {
          path: path.join(__dirname, 'build')
        },
        babel: {
          presets: ['es2015', 'stage-0'],
          plugins: ['transform-runtime']
        },
        postcss: postCSSConfig
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          notExtractLoader: 'style-loader',
          loader: 'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!resolve-url!postcss'
        })
      }, {
        test: /\.(ttf|eot|svg|ttf|otf|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader'
      }, {
        test: /\.(jpg|png|gif)$/,
        loaders: ['file-loader', 'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}']
      }, {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: babelQueryPresets
        }
      }, {
        test: /\.(handlebars|hbs)$/,
        loader: 'handlebars-loader',
        query: {
          partialDirs: [path.join(__dirname, 'src', 'template')]
        }
      }
    ]
  }
};
