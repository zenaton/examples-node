var config = require('./config')
const port = process.env.PORT || config.port

module.exports = {
  entry: './main.js',
  output: {
    filename: './dist/bundle.js'
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:' + port
    }
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  }
}