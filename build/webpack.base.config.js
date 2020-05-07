const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/tpl/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [
          { loader: 'ts-loader' }
        ],
        exclude: /node_modules/
      }
    ]
  }
}