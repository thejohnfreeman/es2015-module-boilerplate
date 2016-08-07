var fs = require('fs')
var path = require('path')
var os = require('os')

module.exports = Object.assign(require('./webpack.config.js'), {
  entry: {
    'module': './src/index.js',
    'tests': 'mocha!./test/test.js',
  },
  output: {
    library: 'module',
    libraryTarget: 'this',
    filename: '[name].js',
  },
  devtool: 'source-map',
  devServer: {
    host: os.hostname(),
    https: true,
    cert: fs.readFileSync(path.join(os.homedir(), '/certs/server.crt')),
    key: fs.readFileSync(path.join(os.homedir(), '/certs/server.key')),
  }
})
