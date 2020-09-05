const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const javascriptRules = {
  test: /\.js|jsx$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-react', '@babel/preset-env'],
      plugins: ['@babel/plugin-proposal-optional-chaining'],
    },
  },
}

const stylesRules = {
  //test: /\.s[ac]ss$/i,
  test: /\.(s*)css$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    'css-loader',
    'sass-loader',
  ],
}

const filesRules = {
  test: /\.(png|svg|jpg|jpeg|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'static/images/[hash].[ext]',
      },
    },
  ],
}

const productionPlugins = [
  new CleanWebpackPlugin(),
  new CompressionPlugin(),
  new HtmlWebpackPlugin({
    title: 'App Title',
    template: 'public/index.html',
  }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[hash].css',
  }),
]

const developmentPlugins = [
  new HtmlWebpackPlugin({
    title: 'App Title',
    template: 'public/index.html',
  }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[hash].css',
  }),
]

module.exports = (env, { mode }) => ({
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/app.[contentHash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [javascriptRules, stylesRules, filesRules],
  },
  devtool: false,
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    useLocalIp: true,
    host: '0.0.0.0',
    port: 9000,
  },
  plugins: mode === 'production' ? productionPlugins : developmentPlugins,
})
