module.exports = {
  entry: {
    'es2015-module': './src/index.js',
  },
  output: {
    libraryTarget: 'commonjs2',
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
}
