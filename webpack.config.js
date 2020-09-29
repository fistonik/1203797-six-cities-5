const path = require("path");

const Path = {
  SRC: './src/',
  PUB: path.resolve(__dirname, 'public')
}

module.exports = {
  entry: Path.SRC + 'index.js',
  output: {
    filename: 'bundle.js',
    path: Path.PUB
  },
  devServer: {
    contentBase: Path.PUB
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
