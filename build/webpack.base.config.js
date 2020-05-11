const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
// const { CheckerPlugin } = require('awesome-typescript-loader')

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
    }),
    new ForkTsCheckerWebpackPlugin()
    // new CheckerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [{
          loader: 'ts-loader',
          // loader: 'awesome-typescript-loader',
          options: {
            transpileOnly: true // (transpileOnly 默认 false, true 只做元转换,不进行类型检查,可进行快速构建,但类型错误还是会通过)
            // 解决方案: 既开启快速构建模式,又保证类型检查,安装 fork-ts-checker-webpack-plugin -D
          }
        }],
        exclude: /node_modules/
      }
    ]
  }
}