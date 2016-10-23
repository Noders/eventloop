import express from 'express';
import webpack from 'webpack';
import path from 'path';
import { inspect } from 'util';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import ngrok from 'ngrok';

import webpackDevConfig from './webpack.dev.config';
import webpackProdConfig from './webpack.config';


const isDeveloping = process.env.NODE_ENV !== 'production';

console.log('MODO: ', process.env.NODE_ENV);
const webpackConfig = isDeveloping ? webpackDevConfig : webpackProdConfig;

const port = isDeveloping ? 3010 : process.env.PORT || 3010;
const app = express();

if (isDeveloping) {
  const compiler = webpack(webpackConfig);
  const middleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: true,
      timings: true,
      chunks: true,
      chunkModules: true,
      modules: true
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(express.static(path.resolve(__dirname, '..', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.hbs'));
  });
}


app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});

if (isDeveloping) {
  ngrok.connect(port, (err, url) => {
    console.log('Ngrok Ready: ', url);
  });
}
