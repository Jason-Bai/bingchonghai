var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  debug: true,
  devtool: 'eval-source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  noInfo: true, // set to false to see a list of every file being bundled.
  entry: {
    app: [
      'webpack-hot-middleware/client',
      'babel-polyfill',
      './src/app/app.css',
      './src/index.js'
    ],
    vendor: [
      'antd/dist/antd.css'
    ]
  },
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    path: path.join(__dirname, 'dist', 'assets'),
    publicPath: '/assets/',
    filename: '[name].js'
  },
  plugins: [
		new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      'window.jQuery': "jquery"
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
      __DEV__: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("css/[name].css")
  ],
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
      {test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {test: /\.(jpe?g|png|gif)$/i, loader: 'file?name=[name].[ext]'},
      {test: /\.ico$/, loader: 'file?name=[name].[ext]'},
      {test: /(\.css|\.scss)$/, loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap']},
      {test: /\.json$/, loader: "json"},
      {test: require.resolve("moment"), loader: "expose-loader?$!expose-loader?moment" }
    ]
  },
  postcss: ()=> [autoprefixer]
};
