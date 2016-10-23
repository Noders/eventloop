const resolve = require('path').resolve;
const pullAll = require('lodash/pullAll');
const uniq = require('lodash/uniq');

const dllDels = {
  /**
   * The DLL Plugin provides a dramatic speed increase to webpack build and hot module reloading
   * by caching the module metadata for all of our npm dependencies. We enable it by default
   * in development.
   *
   *
   * To disable the DLL Plugin, set this value to false.
   */
  dllPlugin: {
    defaults: {
      /**
       * we need to exclude dependencies which are not intended for the browser
       * by listing them here.
       */
      exclude: [
        'chalk',
        'compression',
        'cross-env',
        'handlebars',
        'express',
        'ip',
        'minimist',
        'sanitize.css',
        'font-awesome',
        'moment'
      ],

      /**
       * Specify any additional dependencies here. We include core-js and lodash
       * since a lot of our dependencies depend on them and they get picked up by webpack.
       */
      include: [
        'react',
        'react-dom',
        'jquery',
        'bootstrap',
        'react-helmet',
        'skel-framework',
        'core-js',
        'lodash'
      ],
      path: 'node_modules/_eventloop-dlls'
    },

    entry () {
      const dependencyNames = [];
      const exclude = dllDels.dllPlugin.defaults.exclude;
      const include = dllDels.dllPlugin.defaults.include;
      const includeDependencies = uniq(dependencyNames.concat(include));

      return {
        dllDelsDeps: pullAll(includeDependencies, exclude),
      };
    },
  },
};

module.exports = dllDels;
