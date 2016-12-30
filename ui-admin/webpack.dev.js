var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
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
  output: {
    path: path.join(__dirname, 'public', 'assets'),
    publicPath: '/assets/',
    filename: '[name].js'
  },
  module: {
    /*
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
    ],
    */
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  },
  resolveLoader: {
    root: path.resolve(__dirname, 'node_modules')
  },
  /*
  eslint: {
    configFile: './.eslintrc.json'
  },
  */
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      _: 'expose?_!lodash',
      moment: 'expose?moment!moment'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("css/[name].css"),
    new webpack.ResolverPlugin([
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("package.json", ["main"]),
    ]),
  ]
};
