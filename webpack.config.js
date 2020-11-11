const path = require("path");

const SRC = './src/';
const PUB = path.resolve(__dirname, 'public');

module.exports = {
  entry: SRC + 'index.js',
  output: {
    filename: 'bundle.js',
    path: PUB
  },
  devServer: {
    contentBase: PUB,
    historyApiFallback: true
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
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader']
      }
    ]
  }
}
