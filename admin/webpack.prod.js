var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './src/index'
    ],
    vendor: [
      'antd/dist/antd.css',
      'bootstrap/dist/css/bootstrap.min.css',
      'font-awesome/css/font-awesome.min.css',
      'admin-lte/dist/css/AdminLTE.css',
      'admin-lte/dist/css/skins/_all-skins.min.css',
      'bootstrap/dist/js/bootstrap.min.js',
      'admin-lte/plugins/slimScroll/jquery.slimscroll.min.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist', 'assets'),
    filename: "[name].js",
    publicPath: '/admin/assets/'
  },
  resolve:{
    extensions:['', '.js', '.json', '.es'],
    modulesDirectories: ['node_modules'],
  },
  resolveLoader: {
    root: path.resolve(__dirname, 'node_modules')
  },
  plugins: [
    new HtmlWebpackPlugin({
      files: {
        "css": [ "/admin/assets/[name].[hash].css" ],
        "js": [ "/admin//assets/[name].[hash].js", "/admin/assets/vendor.[hash].js"],
      },
      template: 'index.template.html',
      filename: '../index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new webpack.ProvidePlugin({
      'Promise': 'exports?global.Promise!es6-promise',
      'fetch': 'exports?self.fetch!whatwg-fetch',
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      _: 'expose?_!lodash',
      moment: 'expose?moment!moment'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("css/[name].css"),
    new webpack.ResolverPlugin([
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("package.json", ["main"]),
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js|es?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        loader:  ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader?name=img/[name].[ext]'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=100000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader?name=fonts/[name].[ext]"
      },
      {
        test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader?name=svg/[name].[ext]"
      },
    ]
  }
}
