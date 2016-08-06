var fs = require('fs')
var path = require('path')
var os = require('os')

module.exports = {
  entry: {
    'es2015-module': ['./src/index.js'],
    'es2015-module-tests': 'mocha!./test/test.js',
  },
  output: {
    path: './dist',
    filename: '[name].js',
  },
  module: {
    loaders: [{
      test: /.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {presets: ['es2015']},
    }],
  },
  devServer: {
    host: os.hostname(),
    https: true,
    cert: fs.readFileSync(path.join(os.homedir(), '/certs/server.crt')),
    key: fs.readFileSync(path.join(os.homedir(), '/certs/server.key')),
  }
}
