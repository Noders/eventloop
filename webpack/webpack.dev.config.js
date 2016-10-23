/*
  eslint
    no-var: 0,
    import/no-extraneous-dependencies: 0
*/
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');
var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var cheerio = require('cheerio');
var cssnext = require('postcss-cssnext');
var nested = require('postcss-nested');
var postcssAssets = require('postcss-assets');

var dllPlugin = require('./vendors.js').dllPlugin;

var dllConfig = dllPlugin.defaults;

function postCSSConfig () {
  return [nested, cssnext(), postcssAssets()];
}

function templateContent () {
  const html = fs.readFileSync(
    path.resolve(__dirname, '..', 'src', 'template', 'index.html')
  ).toString();

  const doc = cheerio(html);
  const body = doc.find('body');

  const manifestPath = path.resolve(process.cwd(), dllConfig.path, 'eventloop-manifest.json');

  if (!fs.existsSync(manifestPath)) {
    console.error('The DLL manifest is missing. Please run `npm run build:dll`');
    process.exit(0);
    return null;
  }
  body.append('<script data-dll="true" src="/main.dll.js"></script>');
  return doc.toString();
}

function dllHandler () {
  const manifestPath = path.resolve(process.cwd(), dllConfig.path, 'eventloop-manifest.json');

  if (!fs.existsSync(manifestPath)) {
    console.error('The DLL manifest is missing. Please run `npm run build:dll`');
    process.exit(0);
  }

  return [
    new webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest: require(manifestPath) // eslint-disable-line global-require
    })
  ];
}

const plugins = [
  new HtmlWebpackPlugin({
    inject: true,
    hash: true,
    templateContent: templateContent()
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
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
      BABEL_ENV: JSON.stringify('development')
    }
  })
];

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
  plugins: dllHandler().concat(plugins),
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
      }
    ]
  }
};
