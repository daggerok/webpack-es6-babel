const debug = process.env.NODE_ENV !== 'production',
webpack = require('webpack')

module.exports = {
  context: __dirname,
  devtool: debug ? 'cheap-inline-module-source-map' : null,
  entry: {
    index: './src/main.js',
    test: './tests.js'
  },
  output: {
    path: __dirname + '/dist/',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      }, {
        test: /\.(woff|woff2)$/,
        loader:'url?prefix=font/&limit=5000'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }/*, {
        test: '!mocha!./test/src/tests.js test/bundle.js',
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }*/
    ]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourcemap: false
    })
  ]
}
