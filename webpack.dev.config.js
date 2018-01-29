const path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    all: path.join(__dirname, '/source/javascripts/all.js')
  },
  output: {
    path: path.join(__dirname, '.tmp/webpack_output'),
    filename: 'javascripts/[name].js'
  },
  resolve: {
    modules: [
      path.join(__dirname, 'source'),
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader', options: { sourceMap: true } },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      }
    ]
  }
};
