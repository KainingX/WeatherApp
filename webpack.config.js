var path = require('path');

module.exports = {
  entry: './app/index.js',

  module: {
    rules: [
      {test : /\.(js)$/, use:'babel-loader'},
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  }
}
