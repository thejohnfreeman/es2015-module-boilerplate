var fs = require('fs')
var path = require('path')
var os = require('os')

module.exports = Object.assign(require('./webpack.config.js'), {
  entry: {
    'es2015-module': './src/index.js',
    'es2015-module-tests': 'mocha!./test/test.js',
  },
  output: {
    library: 'module',
    libraryTarget: 'this',
    filename: '[name].js',
  },
  devServer: {
    host: os.hostname(),
    https: true,
    cert: fs.readFileSync(path.join(os.homedir(), '/certs/server.crt')),
    key: fs.readFileSync(path.join(os.homedir(), '/certs/server.key')),
  }
})
