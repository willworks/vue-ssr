var path = require('path');
var cooking = require('cooking');

cooking.set({
  entry: {
    app: ['babel-polyfill', './appsrc/main.js']
  },
  dist: './app',
  // template: './appsrc/index.tpl',

  devServer: {
    port: 8080,
    publicPath: '/'
  },

  // production
  clean: true,
  // hash: true,
  // sourceMap: true,
  minimize: true,
  // chunk: true, // see https://cookingjs.github.io/zh-cn/configuration.html#chunk
  postcss: [
    // require('...')
  ],
  publicPath: '/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  // extractCSS: '[name].[contenthash:7].css',
  alias: {
    'src': path.join(__dirname, 'appsrc')
  },
  extends: ['vue', 'sass', 'autoprefixer']
  // extends: ['vue', 'lint', 'sass', 'autoprefixer']
});

module.exports = cooking.resolve();
