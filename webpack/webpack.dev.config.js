/*
  eslint
    no-var: 0,
    import/no-extraneous-dependencies: 0
*/
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var cssnext = require('postcss-cssnext');
var nested = require('postcss-nested');
var postcssAssets = require('postcss-assets');

var manifest = require('./dll/vendor-manifest.json');

var postCSSConfig = () => {
  return [nested, cssnext(), postcssAssets()];
};

module.exports = {
  cache: true,
  devtool: 'cheap-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(__dirname, '..', 'src', 'app.js')
  ],
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    publicPath: '/',
    filename: 'bundle_[name]_[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: path.resolve(__dirname, '..', 'src', 'template', 'index.hbs')
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      options: {
        context: path.join(__dirname, '..', 'src'),
        output: {
          path: path.join(__dirname, '..', 'build')
        },
        babel: {
          presets: [
            'es2015', 'stage-0'
          ],
          plugins: ['transform-runtime']
        },
        postcss: postCSSConfig
      }
    }),
    new FaviconsWebpackPlugin({
      // Your source logo
      logo: './src/images/eventloop.svg',
      // The prefix for all image files (might be a folder or a name)
      prefix: 'icons-[hash]/',
      // Emit all stats of the generated icons
      emitStats: false,
      // The name of the json containing all favicon information
      statsFilename: 'iconstats-[hash].json',
      // Generate a cache file with control hashes and
      // don't rebuild the favicons until those hashes change
      persistentCache: true,
      // Inject the html into the html-webpack-plugin
      inject: true,
      // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
      background: '#fff',
      // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: true,
        favicons: true,
        firefox: true,
        opengraph: true,
        twitter: true,
        yandex: true,
        windows: false
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        BABEL_ENV: JSON.stringify('development')
      }
    }),
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, 'build'),
      manifest
    })
  ],
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery'
    }
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, '..', 'src/components')],
        loader: ['style?sourceMap', 'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]']
      }, {
        test: /\.css$/,
        include: [path.resolve(__dirname, '..', 'src/css')],
        loader: ['style', 'css']
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
          cacheDirectory: true,
          presets: ['es2015', 'react', 'react-hmre']
        }
      }, {
        test: /\.(handlebars|hbs)$/,
        loader: 'handlebars-loader',
        query: {
          partialDirs: [path.join(__dirname, '..', 'src', 'template')]
        }
      }
    ]
  }
};