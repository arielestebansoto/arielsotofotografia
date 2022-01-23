const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: process.env.NODE_ENV || 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
      },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
          },
        port: 3500,
        open: true,
        historyApiFallback: true,
        compress: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html'
        }),
        new CleanWebpackPlugin()
    ]
}